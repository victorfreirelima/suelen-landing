import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";
import * as Icons from "lucide-react";

interface TestimonialsSectionProps {
    section: {
        title: any;
        testimonials: Array<{
            quote: any;
            name: string;
            role: any;
            company: any;
        }>;
    };
    lang: Locale;
}

export default function TestimonialsSection({ section, lang }: TestimonialsSectionProps) {
    const isPt = lang === "pt-br";

    const features = [
        {
            Icon: Icons.Building2,
            title: isPt ? "Formação em Agência" : "Agency-Trained",
            desc: isPt ? "Forjada em redes de alta pressão e desafios de mídia de primeiro nível." : "Bred in pressure-cooker networks and top tier media challenges.",
        },
        {
            Icon: Icons.LineChart,
            title: isPt ? "Mentalidade Analítica" : "Analytical Mindset",
            desc: isPt ? "Decisões baseadas em significância estatística, não em intuição." : "Decisions based on statistical significance, not intuition.",
        },
        {
            Icon: Icons.Users,
            title: isPt ? "Foco no Cliente" : "Client-Centric",
            desc: isPt ? "Comunicação clara e alinhamento constante com os objetivos do negócio." : "Focus on clear communication and alignment with business goals.",
        },
        {
            Icon: Icons.Settings,
            title: isPt ? "Agnóstica de Ferramentas" : "Tool Agnostic",
            desc: isPt ? "Proficiente em todo o stack moderno de tecnologia de marketing." : "Proficient in the entire modern marketing tech stack.",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[60px] lg:gap-[100px] items-center">
            {/* Left side: Why Work With Me? */}
            <div>
                <h2 className="text-[28px] font-extrabold mb-[44px] tracking-[-0.01em]">
                    {isPt ? "Por que trabalhar comigo?" : "Why Work With Me?"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[40px]">
                    {features.map(({ Icon, title, desc }, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-[12px] mb-[12px]">
                                <Icon className="w-[16px] h-[16px] opacity-70" strokeWidth={2.5} />
                                <h4 className="font-extrabold text-[15px] tracking-[-0.01em] mt-[2px]">{title}</h4>
                            </div>
                            <p className="text-[13px] opacity-60 leading-[1.7] font-normal">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side: Testimonial Card */}
            <div>
                {section.testimonials?.slice(0, 1).map((t, i) => (
                    <div key={i} className="p-[48px] rounded-[24px] bg-white/[0.02] border border-white/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative">
                        <p className="text-[20px] italic opacity-90 leading-[1.8] font-serif mb-[36px]">
                            "{pickLocalized<string>(t.quote, lang)}"
                        </p>
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <Icons.User className="w-[20px] h-[20px] text-white/50" />
                            </div>
                            <div>
                                <div className="font-extrabold text-[14px]">{t.name}</div>
                                <div className="text-[10px] font-bold tracking-[0.05em] uppercase opacity-50 mt-[4px]">
                                    {pickLocalized<string>(t.role, lang)} @ {pickLocalized<string>(t.company, lang)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
