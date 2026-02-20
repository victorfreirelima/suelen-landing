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
            desc: isPt ? "Exposição profunda a vários setores e desafios complexos de mercado." : "Deep exposure to various verticals and complex market challenges.",
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[60px] lg:gap-[80px] items-center">
            {/* Left side: Why Work With Me? */}
            <div>
                <h2 className="text-[26px] font-extrabold mb-[36px] tracking-[-0.01em] text-white">
                    {isPt ? "Por que trabalhar comigo?" : "Why Work With Me?"}
                </h2>
                <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]">
                    {features.map(({ Icon, title, desc }, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-[10px] mb-[8px]">
                                <Icon className="w-[14px] h-[14px] text-white/70" strokeWidth={2.5} />
                                <h4 className="font-bold text-[13px] tracking-[-0.01em] text-white">{title}</h4>
                            </div>
                            <p className="text-[12px] text-white/60 leading-[1.65] font-normal">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side: Testimonial Card */}
            <div>
                {section.testimonials?.slice(0, 1).map((t, i) => (
                    <div key={i} className="p-[32px] rounded-[20px] bg-white/[0.05] border border-white/[0.08] relative">
                        <p className="text-[16px] italic text-white/90 leading-[1.75] font-serif mb-[28px]">
                            "{pickLocalized<string>(t.quote, lang)}"
                        </p>
                        <div className="flex items-center gap-[12px]">
                            <div className="w-[34px] h-[34px] rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <Icons.User className="w-[16px] h-[16px] text-white/40" />
                            </div>
                            <div>
                                <div className="font-bold text-[13px] text-white">{pickLocalized<string>(t.role, lang)}</div>
                                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-white/50 mt-[2px]">{pickLocalized<string>(t.company, lang)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
