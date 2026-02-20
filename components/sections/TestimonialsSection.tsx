import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

interface TestimonialsSectionProps {
    section: {
        title: any;
        testimonials: Array<{
            quote: any;
            name: string;
            role: any;
            company: any;
        }>;
    };
    lang: Locale;
}

export default function TestimonialsSection({ section, lang }: TestimonialsSectionProps) {
    const title = pickLocalized<string>(section.title, lang);

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {section.testimonials?.map((t, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-current bg-opacity-[0.03] border border-current border-opacity-10 flex flex-col justify-between">
                        <p className="text-lg italic opacity-90 leading-relaxed mb-8">
                            “{pickLocalized<string>(t.quote, lang)}”
                        </p>
                        <div>
                            <div className="font-bold text-lg">{t.name}</div>
                            <div className="text-sm opacity-60">
                                {pickLocalized<string>(t.role, lang)} @ {pickLocalized<string>(t.company, lang)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
