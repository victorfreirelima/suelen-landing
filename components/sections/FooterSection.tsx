import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";

interface FooterSectionProps {
    section: {
        copyright: any;
        locationLine: any;
        links: Array<{
            label: any;
            href: string;
        }>;
    };
    lang: Locale;
}

export default function FooterSection({ section, lang }: FooterSectionProps) {
    return (
        <div className="pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold tracking-wider uppercase text-white/50">
            <div>
                {pickLocalized<string>(section.copyright, lang)}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span>{lang === "en" ? "Available for Hire" : "Disponível para Contratação"}</span>
                </div>
                <span>{pickLocalized<string>(section.locationLine, lang)}</span>
                <div className="flex gap-8">
                    {section.links?.map((link, i) => (
                        <a key={i} href={link.href} className="hover:text-white transition-colors">
                            {pickLocalized<string>(link.label, lang)}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
