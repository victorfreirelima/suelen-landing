import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";
import * as Icons from "lucide-react";

interface FrameworksSectionProps {
    section: {
        title: any;
        body: any;
        bullets: any[];
        sideCardSteps: Array<{
            title: any;
            description: any;
        }>;
    };
    lang: Locale;
}

export default function FrameworksSection({ section, lang }: FrameworksSectionProps) {
    const title = pickLocalized<string>(section.title, lang);
    const body = pickLocalized<string>(section.body, lang);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px] lg:gap-[100px] items-start">
            <div>
                <h2 className="text-[28px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-[24px]">{title}</h2>
                <div className="space-y-[18px] mb-[36px]">
                    {body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[13px] text-[#4B5563] leading-[1.8] font-normal">
                            {para}
                        </p>
                    ))}
                </div>
                <ul className="flex flex-col gap-[14px]">
                    {section.bullets?.map((bullet: any, i: number) => (
                        <li key={i} className="flex items-center gap-[12px]">
                            <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#205BF0] text-white flex items-center justify-center">
                                <Icons.Check className="w-[11px] h-[11px]" strokeWidth={3} />
                            </div>
                            <span className="font-semibold text-[13px] text-[#0A0F1F]">{pickLocalized<string>(bullet, lang)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-[40px] rounded-[24px] border border-[#E5E7EB]/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col gap-[36px]">
                {section.sideCardSteps?.map((step, i) => (
                    <div key={i} className="flex gap-[16px] items-start">
                        <div className="flex-shrink-0 w-[28px] h-[28px] rounded-full bg-[#0A0F1F] text-white flex items-center justify-center text-[12px] font-bold mt-[2px]">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="text-[15px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-[6px]">{pickLocalized<string>(step.title, lang)}</h4>
                            <p className="text-[13px] text-[#4B5563] leading-[1.7] font-normal">{pickLocalized<string>(step.description, lang)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
