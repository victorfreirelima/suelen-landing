import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
                <div className="space-y-6 mb-10">
                    {body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-lg opacity-90 leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.bullets?.map((bullet: any, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span className="font-medium">{pickLocalized<string>(bullet, lang)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                {section.sideCardSteps?.map((step, i) => (
                    <div key={i} className="p-6 rounded-xl bg-current bg-opacity-[0.03] border border-current border-opacity-10">
                        <h4 className="text-lg font-bold mb-2">{pickLocalized<string>(step.title, lang)}</h4>
                        <p className="opacity-80 text-sm leading-relaxed">{pickLocalized<string>(step.description, lang)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
