import Hero from "@/components/Hero";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { getLandingPage, getSiteSettings, Locale } from "@/lib/content";

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = (await params) as { lang: Locale };
    const [landingPage, siteSettings] = await Promise.all([
        getLandingPage(lang),
        getSiteSettings(),
    ]);

    if (!landingPage) return null;

    return (
        <main>
            <Hero lang={lang} hero={landingPage.hero} siteSettings={siteSettings} />
            {landingPage.sections?.map((section: any, i: number) => (
                <SectionRenderer key={section.sectionId || i} section={section} lang={lang} />
            ))}
        </main>
    );
}
