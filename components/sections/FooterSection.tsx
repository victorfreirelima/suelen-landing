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
        <div className="pt-12 border-t border-current border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm opacity-60">
            <div>
                <p className="font-medium mb-1">{pickLocalized<string>(section.copyright, lang)}</p>
                <p>{pickLocalized<string>(section.locationLine, lang)}</p>
            </div>
            <div className="flex gap-8">
                {section.links?.map((link, i) => (
                    <a key={i} href={link.href} className="hover:opacity-100 font-medium transition-opacity">
                        {pickLocalized<string>(link.label, lang)}
                    </a>
                ))}
            </div>
        </div>
    );
}
