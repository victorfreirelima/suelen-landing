import { Locale } from "@/lib/content";
import StatsSection from "./StatsSection";
import ExpertiseGridSection from "./ExpertiseGridSection";
import FrameworksSection from "./FrameworksSection";
import JourneySection from "./JourneySection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import FooterSection from "./FooterSection";

interface SectionProps {
    section: any;
    lang: Locale;
}

const SECTION_COMPONENTS: Record<string, React.ComponentType<any>> = {
    statsSection: StatsSection,
    expertiseGridSection: ExpertiseGridSection,
    frameworksSection: FrameworksSection,
    journeySection: JourneySection,
    testimonialsSection: TestimonialsSection,
    ctaSection: CtaSection,
    footerSection: FooterSection,
};

export default function SectionRenderer({ section, lang }: SectionProps) {
    if (!section.enabled) return null;

    const Component = SECTION_COMPONENTS[section._type];
    if (!Component) {
        console.warn(`No component found for section type: ${section._type}`);
        return null;
    }

    // Map backgroundStyle to Tailwind classes
    const bgClasses: Record<string, string> = {
        white: "bg-white text-gray-900",
        gray: "bg-[#F8F9FA] text-gray-900",
        black: "bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white",
        brand: "bg-[#205BF0] text-white",
    };

    // Map paddingStyle to Tailwind classes
    const paddingClasses: Record<string, string> = {
        normal: "py-20 lg:py-24",
        compact: "py-10 lg:py-16",
        spacious: "py-28 lg:py-36",
    };

    // Map maxWidth to Tailwind classes
    const maxWidthClasses: Record<string, string> = {
        default: "max-w-[1200px]",
        narrow: "max-w-[900px]",
        wide: "max-w-[1440px]",
    };

    // Footer section gets a special dedicated wrapper
    if (section._type === "footerSection") {
        return (
            <footer
                id={section.sectionId}
                className="bg-[#F9FAFB] border-t border-[#E5E7EB]"
            >
                <div className="max-w-[1200px] mx-auto px-8 py-[32px]">
                    <Component section={section} lang={lang} />
                </div>
            </footer>
        );
    }

    return (
        <section
            id={section.sectionId}
            className={`${bgClasses[section.backgroundStyle] || bgClasses.white} ${paddingClasses[section.paddingStyle] || paddingClasses.normal
                }`}
        >
            <div className={`mx-auto px-8 ${maxWidthClasses[section.maxWidth] || maxWidthClasses.default}`}>
                <Component section={section} lang={lang} />
            </div>
        </section>
    );
}
