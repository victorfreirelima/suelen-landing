import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

interface StatsSectionProps {
    section: {
        title: any;
        body: any;
        stats: Array<{
            label: any;
            value: string;
        }>;
    };
    lang: Locale;
}

export default function StatsSection({ section, lang }: StatsSectionProps) {
    const title = pickLocalized<string>(section.title, lang);
    const body = pickLocalized<string>(section.body, lang);

    return (
        <div className="w-full">
            <div className="flex items-center gap-[18px] mb-[26px]">
                <div className="h-[2px] w-[30px] bg-[#205BF0]"></div>
                <h2 className="text-[22px] font-extrabold tracking-[-0.01em] text-[#0A0F1F]">{title}</h2>
            </div>
            <div className="space-y-[18px] mt-2">
                {body?.split('\n\n').map((para, i) => {
                    // Make parts of the paragraph bold if they are wrapped in **
                    const boldParsed = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) => {
                        return j % 2 === 1 ? <strong key={j} className="text-[#0A0F1F] font-semibold">{chunk}</strong> : chunk;
                    });
                    return (
                        <p key={i} className="text-[13px] text-[#4B5563] leading-[1.8] font-normal max-w-[640px]">
                            {boldParsed.length > 1 ? boldParsed : para}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
