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
                        backgroundColor: "#f9fafb", // Light gray background
                        background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f3f4f6 100%)", // Subtle radial gradient
                    }}
                >
                    {/* Safe Container */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "1040px",
                            height: "470px",
                            backgroundColor: "transparent",
                        }}
                    >
                        {/* Left Side: Content */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                height: "100%",
                                justifyContent: "center",
                                marginRight: "40px",
                            }}
                        >
                            {/* Brand Mark with Monogram */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "32px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        backgroundColor: "#1d4ed8",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "12px",
                                        color: "white",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        fontFamily: "sans-serif",
                                    }}
                                >
                                    S
                                </div>
                                <div
                                    style={{
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#374151",
                                        fontFamily: "sans-serif",
                                    }}
                                >
                                    Suelen Fonteles
                                </div>
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
                                    marginBottom: "16px",
                                    fontFamily: "sans-serif",
                                    maxHeight: "220px",
                                    overflow: "hidden",
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
                                    maxWidth: "500px",
                                    display: "flex",
                                    lineHeight: 1.4,
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
                                    width: "420px",
                                    height: "420px",
                                    borderRadius: "32px",
                                    overflow: "hidden",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    border: "8px solid white",
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
