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
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
            {/* Left side: Why Work With Me? */}
            <div>
                <h2 className="text-3xl md:text-[2.5rem] font-extrabold mb-12 tracking-tight">
                    {lang === "pt-br" ? "Por que trabalhar comigo?" : "Why Work With Me?"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Icons.Building2 className="w-[18px] h-[18px] opacity-70" strokeWidth={2.5} />
                            <h4 className="font-extrabold text-[15px]">Agency-Trained</h4>
                        </div>
                        <p className="text-[13px] opacity-60 leading-relaxed font-medium">Bred in pressure-cooker networks and top tier media challenges.</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Icons.LineChart className="w-[18px] h-[18px] opacity-70" strokeWidth={2.5} />
                            <h4 className="font-extrabold text-[15px]">Analytical Mindset</h4>
                        </div>
                        <p className="text-[13px] opacity-60 leading-relaxed font-medium">Decisions based on statistical significance, not intuition.</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Icons.Users className="w-[18px] h-[18px] opacity-70" strokeWidth={2.5} />
                            <h4 className="font-extrabold text-[15px]">Client-Centric</h4>
                        </div>
                        <p className="text-[13px] opacity-60 leading-relaxed font-medium">Focus on clear communication and alignment with business goals.</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Icons.Settings className="w-[18px] h-[18px] opacity-70" strokeWidth={2.5} />
                            <h4 className="font-extrabold text-[15px]">Tool Agnostic</h4>
                        </div>
                        <p className="text-[13px] opacity-60 leading-relaxed font-medium">Proficient in the entire modern marketing tech stack.</p>
                    </div>
                </div>
            </div>

            {/* Right side: Testimonial Card */}
            <div>
                {section.testimonials?.slice(0, 1).map((t, i) => (
                    <div key={i} className="p-10 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl relative">
                        <p className="text-xl md:text-[22px] italic opacity-90 leading-relaxed font-serif mb-10">
                            "{pickLocalized<string>(t.quote, lang)}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <Icons.User className="w-6 h-6 text-white/50" />
                            </div>
                            <div>
                                <div className="font-extrabold text-[15px]">{t.name}</div>
                                <div className="text-[11px] font-bold tracking-wider uppercase opacity-50 mt-1">
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
