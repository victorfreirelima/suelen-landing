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
                        padding: "100px",
                    }}
                >
                    {/* Centered Safe Area (700px wide) */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            width: "700px",
                        }}
                    >
                        {/* 1. Large Portrait Image */}
                        {portraitUrl && (
                            <div
                                style={{
                                    display: "flex",
                                    width: "320px",
                                    height: "320px",
                                    borderRadius: "160px", // Full circle
                                    overflow: "hidden",
                                    marginBottom: "40px",
                                    border: "6px solid #F3F4F6", // Subtle off-white border
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
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
                                    alt="Suelen Fonteles"
                                />
                            </div>
                        )}

                        {/* 2. Main Headline */}
                        <div
                            style={{
                                fontSize: "72px",
                                fontWeight: "900",
                                color: "#000000",
                                fontFamily: "sans-serif",
                                marginBottom: "12px",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Suelen Fonteles
                        </div>

                        {/* 3. Accent Line */}
                        <div
                            style={{
                                fontSize: "36px",
                                fontWeight: "700",
                                color: "#2563EB",
                                fontFamily: "sans-serif",
                                marginBottom: "24px",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Paid Media
                        </div>

                        {/* 4. Credibility Line */}
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: "500",
                                color: "#666666",
                                fontFamily: "sans-serif",
                                opacity: 0.8,
                            }}
                        >
                            US & Canada Performance Marketing
                        </div>
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
