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
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{title}</h2>
            <div className="max-w-4xl mx-auto space-y-12">
                {section.roles?.map((role, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-blue-600 border-opacity-30 pb-12 last:pb-0">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold">{pickLocalized<string>(role.title, lang)}</h3>
                                <p className="opacity-70 font-medium">{pickLocalized<string>(role.companyLine, lang)}</p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-blue-600 bg-opacity-10 text-blue-600 text-sm font-bold">
                                {role.dates}
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {role.bullets?.map((bullet: any, j: number) => (
                                <li key={j} className="flex gap-3 opacity-80 leading-relaxed text-sm">
                                    <span className="text-blue-600">•</span>
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
