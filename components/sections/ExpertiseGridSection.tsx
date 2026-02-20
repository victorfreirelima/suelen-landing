import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";
import * as Icons from "lucide-react";

interface ExpertiseGridSectionProps {
    section: {
        title: any;
        subtitle: any;
        cards: Array<{
            title: any;
            description: any;
            iconKey: string;
        }>;
    };
    lang: Locale;
}

export default function ExpertiseGridSection({ section, lang }: ExpertiseGridSectionProps) {
    const title = pickLocalized<string>(section.title, lang);
    const subtitle = pickLocalized<string>(section.subtitle, lang);

    return (
        <div>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-[2.5rem] font-extrabold mb-4 tracking-tight">{title}</h2>
                <p className="text-[17px] opacity-60 font-medium max-w-2xl mx-auto">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {section.cards?.map((card, i) => {
                    const cardTitle = pickLocalized<string>(card.title, lang);
                    const cardDesc = pickLocalized<string>(card.description, lang);
                    const Icon = (Icons as any)[card.iconKey] || Icons.Layout;

                    return (
                        <div key={i} className="p-8 rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                                <Icon className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-extrabold mb-3 tracking-tight">{cardTitle}</h3>
                            <p className="opacity-60 text-[15px] leading-relaxed font-medium">{cardDesc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
