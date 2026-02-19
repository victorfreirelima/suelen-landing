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
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "white",
                        padding: "60px",
                    }}
                >
                    {/* Left Side: Content */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            marginRight: "40px",
                        }}
                    >
                        {/* Brand Mark */}
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: "#1d4ed8",
                                marginBottom: "40px",
                                fontFamily: "sans-serif",
                            }}
                        >
                            Suelen Fonteles
                        </div>

                        {/* Headline */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                fontSize: "64px",
                                fontWeight: "800",
                                color: "#111827",
                                lineHeight: 1.1,
                                marginBottom: "20px",
                                fontFamily: "sans-serif",
                            }}
                        >
                            {headline.split(highlightWord).map((part: string, i: number, arr: string[]) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span style={{ color: "#1d4ed8" }}>{highlightWord}</span>
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Subheadline */}
                        <div
                            style={{
                                fontSize: "28px",
                                color: "#4b5563",
                                fontFamily: "sans-serif",
                            }}
                        >
                            {subheadline}
                        </div>
                    </div>

                    {/* Right Side: Portrait */}
                    {portraitUrl && (
                        <div
                            style={{
                                display: "flex",
                                width: "450px",
                                height: "450px",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                        >
                            <img
                                src={portraitUrl}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                alt="Portrait"
                            />
                        </div>
                    )}
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
