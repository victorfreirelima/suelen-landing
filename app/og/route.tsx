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
        seo,
        hero
      }
    `;

        const data = await client.fetch(query);
        const hero = data?.hero;
        const seo = data?.seo;

        const headline = (hero?.headline?.[sanityLang] || hero?.headline?.en || "Suelen Fonteles").replace(/\|/g, "");
        const subheadline = hero?.subheadline?.[sanityLang] || hero?.subheadline?.en || "US & Canada Performance Marketing";
        const portraitUrl = hero?.portraitImage
            ? urlForImage(hero.portraitImage).width(1200).height(1200).url()
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
                        padding: "200px", // 2x of 100px
                    }}
                >
                    {/* Centered Safe Area (1400px wide at 2x) */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            width: "1400px",
                        }}
                    >
                        {/* 1. Large Portrait Image (2x sized) */}
                        {portraitUrl && (
                            <div
                                style={{
                                    display: "flex",
                                    width: "640px", // 2x of 320px
                                    height: "640px", // 2x of 320px
                                    borderRadius: "320px", // 2x of 160px
                                    overflow: "hidden",
                                    marginBottom: "80px", // 2x of 40px
                                    backgroundColor: "#FFFFFF",
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

                        {/* 2. Main Name (2x sized) */}
                        <div
                            style={{
                                fontSize: "144px", // 2x of 72px
                                fontWeight: "900",
                                color: "#000000",
                                fontFamily: "sans-serif",
                                marginBottom: "24px", // 2x of 12px
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Suelen Fonteles
                        </div>

                        {/* 3. Specialty Accent (2x sized) */}
                        <div
                            style={{
                                fontSize: "72px", // 2x of 36px
                                fontWeight: "800",
                                color: "#1E40AF", // Stronger Blue (Blue-800)
                                fontFamily: "sans-serif",
                                marginBottom: "48px", // 2x of 24px
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Paid Media
                        </div>

                        {/* 4. Credibility Line (2x sized) */}
                        <div
                            style={{
                                fontSize: "48px", // 2x of 24px
                                fontWeight: "700",
                                color: "#000000", // Solid black for sharpness
                                fontFamily: "sans-serif",
                            }}
                        >
                            US & Canada Performance Marketing
                        </div>
                    </div>
                </div>
            ),
            {
                width: 2400, // 2x resolution
                height: 1260, // 2x resolution
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
