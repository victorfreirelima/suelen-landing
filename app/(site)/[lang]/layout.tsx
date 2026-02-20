import "../../globals.css";
import { Inter } from "next/font/google";
import { getSiteSettings, getLandingPage, Locale } from "@/lib/content";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { pickLocalized } from "@/lib/localization";
import DevWarningBanner from "@/components/DevWarningBanner";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = (await params) as { lang: Locale };
    const landingPage = await getLandingPage(lang);
    const siteSettings = await getSiteSettings();

    const seo = landingPage?.seo;
    const defaults = siteSettings?.seoDefaults;

    const title = pickLocalized<string>(seo?.title, lang) || pickLocalized<string>(defaults?.title, lang) || "Suelen Fonteles";
    const description = pickLocalized<string>(seo?.description, lang) || pickLocalized<string>(defaults?.description, lang) || "";

    // OG Image logic: dynamic generator or Sanity override
    let ogImageUrl = `/og?lang=${lang}`;
    if (seo?.ogImage) {
        // Use Sanity image if provided as override
        // (Simplified for this example, usually would use urlForImage(seo.ogImage).url())
    }

    return {
        title,
        description,
        metadataBase: new URL("https://suelen-landing.vercel.app"),
        openGraph: {
            title: pickLocalized<string>(defaults?.ogTitle, lang) || title,
            description: pickLocalized<string>(defaults?.ogDescription, lang) || description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'website',
            locale: lang === 'pt-br' ? 'pt_BR' : 'en_US',
        },
        twitter: {
            card: siteSettings?.seoDefaults?.twitterCard || 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
        },
        icons: {
            icon: [
                { url: "/favicon.ico" },
                { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
                { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            ],
            apple: "/apple-touch-icon.png",
        },
    };
}

export default async function SiteLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = (await params) as { lang: Locale };
    const siteSettings = await getSiteSettings();
    const landingPage = await getLandingPage(lang);

    return (
        <html lang={lang} className="scroll-smooth">
            <body className={cn(inter.className, "antialiased selection:bg-blue-100 selection:text-blue-600")}>
                <Navbar lang={lang} siteSettings={siteSettings} navigation={landingPage?.navigation} />
                {children}
                <DevWarningBanner />
            </body>
        </html>
    );
}
