import Hero from "@/components/Hero";
import ImpactBand from "@/components/ImpactBand";
import CoreExpertise from "@/components/CoreExpertise";
import Frameworks from "@/components/Frameworks";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FinalCTA from "@/components/FinalCTA";
import { getLandingPage, Locale } from "@/lib/content";

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const data = await getLandingPage(lang);

    if (!data) return null;

    return (
        <main>
            <Hero lang={lang} data={data.hero} />
            <ImpactBand data={data.impactSection} />
            <CoreExpertise data={data.coreExpertise} />
            <Frameworks data={data.frameworksSection} />
            <ProfessionalJourney data={data.professionalJourney} />
            <WhyWorkWithMe data={data.whyWorkWithMe} />
            <FinalCTA data={data.finalCTA} />
        </main>
    );
}
