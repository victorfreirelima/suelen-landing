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
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div>
                <h2 className="text-3xl md:text-[2.5rem] font-extrabold mb-8 tracking-tight">{title}</h2>
                <div className="space-y-6 mb-10">
                    {body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[17px] opacity-80 leading-relaxed font-medium">
                            {para}
                        </p>
                    ))}
                </div>
                <ul className="flex flex-col gap-4">
                    {section.bullets?.map((bullet: any, i: number) => (
                        <li key={i} className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-600 text-white flex items-center justify-center">
                                <Icons.Check className="w-3.5 h-3.5" strokeWidth={3.5} />
                            </div>
                            <span className="font-bold text-[15px]">{pickLocalized<string>(bullet, lang)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] space-y-10">
                {section.sideCardSteps?.map((step, i) => (
                    <div key={i} className="flex gap-5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A0F1F] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="text-[17px] font-extrabold mb-1 tracking-tight">{pickLocalized<string>(step.title, lang)}</h4>
                            <p className="opacity-60 text-[14px] leading-relaxed font-medium">{pickLocalized<string>(step.description, lang)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
