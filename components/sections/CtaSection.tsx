import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

interface CtaSectionProps {
    section: {
        title: any;
        subtitle: any;
        buttons: Array<{
            label: any;
            href: string;
            variant: "primary" | "secondary";
        }>;
    };
    lang: Locale;
}

export default function CtaSection({ section, lang }: CtaSectionProps) {
    const title = pickLocalized<string>(section.title, lang);
    const subtitle = pickLocalized<string>(section.subtitle, lang);

    return (
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl opacity-80 mb-12 leading-relaxed">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-6">
                {section.buttons?.map((btn, i) => (
                    <a
                        key={i}
                        href={btn.href}
                        className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${btn.variant === "primary"
                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                                : "bg-transparent border-2 border-current opacity-80 hover:opacity-100"
                            }`}
                    >
                        {pickLocalized<string>(btn.label, lang)}
                    </a>
                ))}
            </div>
        </div>
    );
}
