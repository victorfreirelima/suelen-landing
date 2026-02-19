import { ImageResponse } from "next/og";
import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const runtime = "edge";
export const revalidate = 3600; // Cache for 1 hour

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jhg5rrpj",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = createImageUrlBuilder(client);

function urlForImage(source: any) {
    return builder.image(source);
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "en";
    const sanityLang = lang === "en" ? "en" : "ptBR";

    try {
        const query = `
      *[_type == "landingPage"][0] {
        hero {
          headline { "text": select($lang == "en" => en, ptBR) },
          highlightWord { "text": select($lang == "en" => en, ptBR) },
          subheadline { "text": select($lang == "en" => en, ptBR) },
          portraitImage
        }
      }
    `;

        const data = await client.fetch(query, { lang: sanityLang });

        const headline = data?.hero?.headline?.text || "Suelen Fonteles";
        const subheadline = data?.hero?.subheadline?.text || "Paid Media Specialist";
        const highlightWord = data?.hero?.highlightWord?.text || "Paid Media";
        const portraitUrl = data?.hero?.portraitImage
            ? urlForImage(data.hero.portraitImage).width(600).height(600).url()
            : null;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFFFFF",
                        position: "relative",
                    }}
                >
                    {/* Main Content Area (Safe Zone: 1000x430 inside 1200x630) */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "1000px",
                            height: "430px",
                        }}
                    >
                        {/* Left Side: Text Stack */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                height: "100%",
                                justifyContent: "space-between",
                                marginRight: "40px",
                            }}
                        >
                            {/* Top: Branding */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: "300",
                                        color: "#444444",
                                        fontFamily: "sans-serif",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Suelen Fonteles
                                </div>
                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "300",
                                        color: "#666666",
                                        fontFamily: "sans-serif",
                                        marginTop: "4px",
                                    }}
                                >
                                    Performance Marketing
                                </div>
                            </div>

                            {/* Center: Headline (Clamp to 2 lines) */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: "60px",
                                    fontWeight: "800",
                                    color: "#111111",
                                    lineHeight: 1.1,
                                    fontFamily: "sans-serif",
                                    margin: "20px 0",
                                    maxHeight: "132px",
                                    overflow: "hidden",
                                }}
                            >
                                {headline.split(highlightWord).map((part: string, i: number, arr: string[]) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <span style={{ color: "#2563EB" }}>{highlightWord}</span>
                                        )}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom: Credibility */}
                            <div
                                style={{
                                    fontSize: "20px",
                                    color: "#666666",
                                    fontFamily: "sans-serif",
                                    fontWeight: "400",
                                }}
                            >
                                Senior Performance Marketing Leader • 13+ Years
                            </div>
                        </div>

                        {/* Right Side: Portrait */}
                        {portraitUrl && (
                            <div
                                style={{
                                    display: "flex",
                                    width: "400px",
                                    height: "400px",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                                }}
                            >
                                <img
                                    src={portraitUrl}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                    }}
                                    alt="Portrait"
                                />
                            </div>
                        )}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error) {
        console.error("OG Generation Error:", error);
        // Minimal fallback
        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        fontSize: "64px",
                        fontWeight: "bold",
                        color: "#1d4ed8",
                    }}
                >
                    Suelen Fonteles
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    }
}
