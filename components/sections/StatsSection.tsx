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
            <div className="space-y-6 mt-8">
                {body?.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[17px] leading-relaxed opacity-80 font-medium">
                        {para}
                    </p>
                ))}
            </div>
        </div>
    );
}
