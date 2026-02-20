import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

interface JourneySectionProps {
    section: {
        title: any;
        roles: Array<{
            title: any;
            companyLine: any;
            dates: string;
            bullets: any[];
        }>;
    };
    lang: Locale;
}

export default function JourneySection({ section, lang }: JourneySectionProps) {
    const title = pickLocalized<string>(section.title, lang);

    return (
        <div>
            <div className="flex flex-col items-center mb-[60px]">
                <h2 className="text-[28px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-3">{title}</h2>
                <div className="h-[2px] w-[40px] bg-[#0A0F1F]" />
            </div>
            <div className="max-w-[720px] mx-auto">
                {section.roles?.map((role, i) => (
                    <div key={i} className="relative pl-[44px] border-l-2 border-[#E5E7EB] pb-[56px] last:pb-0">
                        {/* Timeline dot */}
                        <div className="absolute left-[-6px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#0A0F1F] border-2 border-white" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] mb-[6px]">
                            <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-[#0A0F1F]">{pickLocalized<string>(role.title, lang)}</h3>
                            <span className="self-start sm:self-auto px-[10px] py-[4px] rounded-[6px] bg-[#EEF2FF] text-[#205BF0] text-[10px] uppercase tracking-[0.05em] font-bold whitespace-nowrap">
                                {role.dates}
                            </span>
                        </div>

                        <p className="font-semibold text-[13px] text-[#4B5563] mb-[20px]">
                            {pickLocalized<string>(role.companyLine, lang)}
                        </p>

                        <ul className="space-y-[12px]">
                            {role.bullets?.map((bullet: any, j: number) => (
                                <li key={j} className="flex gap-[12px] items-start text-[13px] leading-[1.8] font-normal">
                                    <div className="w-[4px] h-[4px] rounded-full bg-[#4B5563] mt-[8px] flex-shrink-0" />
                                    <span className="text-[#4B5563] [&_a]:text-inherit [&_a]:no-underline">{pickLocalized<string>(bullet, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
