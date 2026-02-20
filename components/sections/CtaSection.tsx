import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";
import * as Icons from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto py-8">
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold tracking-tight mb-6">{title}</h2>
            <p className="text-[17px] opacity-60 mb-10 leading-relaxed font-medium">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
                {section.buttons?.map((btn, i) => {
                    const isLinkedIn = btn.href.toLowerCase().includes("linkedin");
                    const Icon = isLinkedIn ? Icons.Linkedin : Icons.Mail;

                    return (
                        <a
                            key={i}
                            href={btn.href}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-[14px] tracking-wide transition-all ${btn.variant === "primary"
                                ? "bg-[#0A66C2] text-white hover:bg-[#084e96] shadow-md shadow-blue-900/10 border border-transparent"
                                : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-sm"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {pickLocalized<string>(btn.label, lang)}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
