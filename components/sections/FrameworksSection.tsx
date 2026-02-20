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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px] lg:gap-[80px] items-start">
            {/* Left */}
            <div className="pt-[8px]">
                <h2 className="text-[28px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-[20px]">{title}</h2>
                <div className="space-y-[14px] mb-[32px]">
                    {body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[13px] text-[#4B5563] leading-[1.8] font-normal">
                            {para}
                        </p>
                    ))}
                </div>
                <ul className="flex flex-col gap-[12px]">
                    {section.bullets?.map((bullet: any, i: number) => (
                        <li key={i} className="flex items-center gap-[10px]">
                            <div className="flex-shrink-0 w-[16px] h-[16px] rounded-full bg-[#205BF0] text-white flex items-center justify-center">
                                <Icons.Check className="w-[10px] h-[10px]" strokeWidth={3} />
                            </div>
                            <span className="font-medium text-[13px] text-[#111827]">{pickLocalized<string>(bullet, lang)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right — Floating Card */}
            <div className="bg-white p-[36px] rounded-[16px] border border-[#E5E7EB]/80 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col gap-[32px] mt-[8px]">
                {section.sideCardSteps?.map((step, i) => (
                    <div key={i} className="flex gap-[16px] items-start">
                        <div className="flex-shrink-0 w-[28px] h-[28px] rounded-full bg-[#111827] text-white flex items-center justify-center text-[12px] font-semibold mt-[1px]">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="text-[14px] font-bold tracking-[-0.01em] text-[#111827] mb-[4px]">{pickLocalized<string>(step.title, lang)}</h4>
                            <p className="text-[12px] text-[#6B7280] leading-[1.65] font-normal">{pickLocalized<string>(step.description, lang)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
