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
            <div className="text-center mb-[44px]">
                <h2 className="text-[28px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-3">{title}</h2>
                <p className="text-[13px] text-[#4B5563] font-normal">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {section.cards?.map((card, i) => {
                    const cardTitle = pickLocalized<string>(card.title, lang);
                    const cardDesc = pickLocalized<string>(card.description, lang);
                    const Icon = (Icons as any)[card.iconKey] || Icons.Layout;

                    return (
                        <div key={i} className="px-7 py-8 rounded-[16px] bg-white border border-[#E5E7EB]/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.06)] transition-all flex flex-col items-start">
                            <div className="w-[38px] h-[38px] bg-[#EFF6FF] rounded-[8px] flex items-center justify-center mb-5">
                                <Icon className="w-[18px] h-[18px] text-[#205BF0]" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-[15px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-2">{cardTitle}</h3>
                            <p className="text-[13px] text-[#4B5563] leading-[1.7] font-normal">{cardDesc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
