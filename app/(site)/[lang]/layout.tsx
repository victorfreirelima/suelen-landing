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

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const data = await getLandingPage(lang);

    if (!data || !data.seo) return { title: "Suelen Fonteles", description: "" };

    const { metaTitle, metaDescription, ogImage } = data.seo;

    return {
        title: metaTitle.text,
        description: metaDescription.text,
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
        openGraph: {
            title: metaTitle.text,
            description: metaDescription.text,
            images: ogImage ? [urlForImage(ogImage).width(1200).height(630).url()] : [],
            type: 'website',
            locale: lang === 'pt-br' ? 'pt_BR' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle.text,
            description: metaDescription.text,
            images: ogImage ? [urlForImage(ogImage).width(1200).height(630).url()] : [],
        },
        // Security Headers handled in next.config.ts for best practice, 
        // but some can be added here if needed for meta tags (not usual)
    };
}

export default async function SiteLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
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
