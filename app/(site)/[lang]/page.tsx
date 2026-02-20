import Hero from "@/components/Hero";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { getLandingPage, getSiteSettings, Locale } from "@/lib/content";

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = (await params) as { lang: Locale };
    const [landingPage, siteSettings] = await Promise.all([
        getLandingPage(lang),
        getSiteSettings(),
    ]);

    if (!landingPage) {
        if (process.env.NODE_ENV === "development") {
            return (
                <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-red-50">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Sanity Content Missing</h1>
                    <p className="text-red-700 mb-2 max-w-xl">
                        The `landingPage` document could not be found in the configured dataset.
                        Please ensure you have imported the seed data or created the document in Sanity Studio.
                    </p>
                </main>
            );
        }

        // Minimal fallback for production
        return (
            <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Suelen Fonteles</h1>
                <p className="text-xl text-gray-600">Portfolio coming soon...</p>
            </main>
        );
    }

    return (
        <main>
            <Hero lang={lang} hero={landingPage.hero} siteSettings={siteSettings} />
            {landingPage.sections?.map((section: any, i: number) => (
                <SectionRenderer key={section.sectionId || i} section={section} lang={lang} />
            ))}
        </main>
    );
}
