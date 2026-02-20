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
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-blue-600"></div>
                <h2 className="text-2xl font-extrabold">{title}</h2>
            </div>
            <div className="space-y-6">
                {body?.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base leading-relaxed opacity-90">
                        {para}
                    </p>
                ))}
            </div>
            {section.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {section.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm uppercase tracking-wider opacity-70">
                                {pickLocalized<string>(stat.label, lang)}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
