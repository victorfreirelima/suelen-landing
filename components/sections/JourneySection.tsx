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
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-[2.5rem] font-extrabold tracking-tight mb-4">{title}</h2>
                <div className="h-1 w-10 bg-gray-800 rounded-full" />
            </div>
            <div className="max-w-3xl mx-auto">
                {section.roles?.map((role, i) => (
                    <div key={i} className="relative pl-10 md:pl-16 border-l-[3px] border-gray-100 pb-16 last:pb-0">
                        {/* Timeline dot */}
                        <div className="absolute left-[-8.5px] top-[6px] w-[14px] h-[14px] rounded bg-gray-700 ring-[6px] ring-white shadow-sm" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <h3 className="text-xl font-extrabold tracking-tight">{pickLocalized<string>(role.title, lang)}</h3>
                            <span className="self-start sm:self-auto px-3 py-1 rounded bg-blue-50 text-blue-700 text-[11px] uppercase tracking-wider font-bold">
                                {role.dates}
                            </span>
                        </div>

                        <p className="font-bold text-[15px] opacity-80 mb-6 bg-current bg-opacity-[0.03] inline-block px-3 py-1 rounded-md">
                            {pickLocalized<string>(role.companyLine, lang)}
                        </p>

                        <ul className="space-y-4">
                            {role.bullets?.map((bullet: any, j: number) => (
                                <li key={j} className="flex gap-4 opacity-70 leading-relaxed text-[15px] font-medium">
                                    <span className="text-gray-400 mt-0.5">•</span>
                                    <span>{pickLocalized<string>(bullet, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
