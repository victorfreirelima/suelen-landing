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
        <div className="text-center w-full flex flex-col items-center py-16 lg:py-24">
            <h2 className="text-[36px] font-extrabold tracking-[-0.01em] text-[#0A0F1F] mb-[20px]">{title}</h2>
            <p className="text-[13px] text-[#4B5563] mb-[40px] leading-[1.7] font-normal max-w-[480px]">
                {subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-[16px]">
                {section.buttons?.map((btn, i) => {
                    const isLinkedIn = btn.href.toLowerCase().includes("linkedin");
                    const Icon = isLinkedIn ? Icons.Linkedin : Icons.Mail;

                    return (
                        <a
                            key={i}
                            href={btn.href}
                            className={`flex items-center justify-center gap-[10px] px-[24px] h-[48px] rounded-[10px] font-bold text-[13px] tracking-wide transition-all ${btn.variant === "primary"
                                ? "bg-[#0A0F1F] text-white hover:bg-[#000000] shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                                : "bg-white border border-[#E5E7EB] text-[#0A0F1F] hover:bg-gray-50 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                                }`}
                        >
                            <Icon className="w-[16px] h-[16px]" strokeWidth={2.5} />
                            {pickLocalized<string>(btn.label, lang)}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
