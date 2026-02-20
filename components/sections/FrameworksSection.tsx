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
            <div className="bg-[#EEF2F7] p-[40px] rounded-[24px] flex flex-col gap-[36px] mt-[8px]">
                {section.sideCardSteps?.map((step, i) => (
                    <div key={i} className="flex gap-[18px] items-start">
                        <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#0F172A] text-white flex items-center justify-center text-[14px] font-bold mt-[2px]">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="text-[16px] font-bold tracking-[-0.01em] text-[#0F172A] mb-[6px]">{pickLocalized<string>(step.title, lang)}</h4>
                            <p className="text-[13px] text-[#6B7280] leading-[1.7] font-normal">{pickLocalized<string>(step.description, lang)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
