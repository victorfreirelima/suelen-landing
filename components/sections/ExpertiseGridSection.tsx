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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.cards?.map((card, i) => {
                    const cardTitle = pickLocalized<string>(card.title, lang);
                    const cardDesc = pickLocalized<string>(card.description, lang);
                    const Icon = (Icons as any)[card.iconKey] || Icons.Layout;

                    return (
                        <div key={i} className="p-8 rounded-2xl border border-current border-opacity-10 bg-current bg-opacity-[0.02] hover:bg-opacity-[0.05] transition-all">
                            <Icon className="w-10 h-10 mb-6 text-blue-600" />
                            <h3 className="text-xl font-bold mb-4">{cardTitle}</h3>
                            <p className="opacity-80 leading-relaxed">{cardDesc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
