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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-[8px] text-[13px] text-[#6B7280]">
            <span>
                {pickLocalized<string>(section.copyright, lang)}
            </span>
            <div className="flex items-center gap-[16px]">
                <div className="flex items-center gap-[6px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                    <span className="font-medium text-[13px]">{lang === "en" ? "Available for Hire" : "Disponível para Contratação"}</span>
                </div>
                <span className="text-[#9CA3AF]">–</span>
                <span>{pickLocalized<string>(section.locationLine, lang)}</span>
            </div>
        </div>
    );
}
