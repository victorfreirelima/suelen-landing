import "../../globals.css";
import { Inter } from "next/font/google";
import { getSiteSettings, getLandingPage, Locale } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import DevWarningBanner from "@/components/DevWarningBanner";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = (await params) as { lang: Locale };
    const data = await getLandingPage(lang);

    const title = data?.seo?.metaTitle?.text || "Suelen Fonteles";
    const description = data?.seo?.metaDescription?.text || "";
    const ogImageUrl = `/og?lang=${lang}`;

    return {
        title,
        description,
        metadataBase: new URL("https://suelen-landing.vercel.app"),
        openGraph: {
            title,
            description,
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
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
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
    const data = await getLandingPage(lang);

    return (
        <html lang={lang} className="scroll-smooth">
            <body className={cn(inter.className, "antialiased selection:bg-blue-100 selection:text-brand-blue")}>
                {data && <Navbar lang={lang} data={data.navbar} />}
                {children}
                {data && <Footer data={data.footer} />}
                <DevWarningBanner />
            </body>
        </html>
    );
}
