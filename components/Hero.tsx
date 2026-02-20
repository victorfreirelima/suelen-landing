import Image from "next/image";
import * as Icons from "lucide-react";
import { Locale } from "@/lib/content";
import { urlForImage } from "@/sanity/lib/image";
import { pickLocalized } from "@/lib/localization";

interface HeroProps {
    lang: Locale;
    hero: any;
    siteSettings: any;
}

export default function Hero({ lang, hero, siteSettings }: HeroProps) {
    if (!hero) return null;

    const badgeText = pickLocalized<string>(hero.badgeText, lang);
    const headline = pickLocalized<string>(hero.headline, lang);
    const subheadline = pickLocalized<string>(hero.subheadline, lang);

    // Parse headline for highlight word |word|
    const headlineParts = headline?.split('|') || [];

    const primaryCta = hero.primaryCta;
    const secondaryCta = hero.secondaryCta;
    const socialLinks = siteSettings?.socialLinks || [];

    return (
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div className="max-w-xl">
                    {badgeText && (
                        <div className="inline-flex items-center py-1.5 px-3 rounded-md bg-blue-50/80 border border-blue-100 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                            <span className="text-blue-700 text-[10px] font-bold uppercase tracking-widest">
                                {badgeText}
                            </span>
                        </div>
                    )}
                    <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
                        {headlineParts.map((part, i) => (
                            i % 2 === 1 ? (
                                <span key={i} className="text-blue-600 block mt-2">
                                    {part}
                                </span>
                            ) : part
                        ))}
                    </h1>
                    <p className="text-lg opacity-60 mb-10 leading-relaxed font-medium">
                        {subheadline}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                        {primaryCta && (
                            <a
                                href={primaryCta.href}
                                className="bg-[#0A0F1F] text-white px-8 py-3.5 rounded-xl font-bold text-[13px] tracking-wide hover:bg-black transition-all"
                            >
                                {pickLocalized<string>(primaryCta.label, lang)}
                            </a>
                        )}
                        {secondaryCta && (
                            <a
                                href={secondaryCta.href}
                                className="bg-white border border-gray-200 text-black px-8 py-3.5 rounded-xl font-bold text-[13px] tracking-wide hover:bg-gray-50 transition-all"
                            >
                                {pickLocalized<string>(secondaryCta.label, lang)}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center space-x-3">
                        {socialLinks.map((link: any, i: number) => {
                            const Icon = (Icons as any)[link.iconKey] || Icons.Share2;
                            return (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100/80 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                    <Icon className="w-[18px] h-[18px]" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="relative md:ml-10">
                    <div className="absolute inset-0 bg-[#f1f1f1] rounded-[2rem] translate-x-3 translate-y-3 -z-10"></div>
                    <div className="relative z-10 w-full aspect-[4/4.5] rounded-[2rem] overflow-hidden bg-gray-50 border-[10px] sm:border-[16px] border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                        {hero.portraitImage ? (
                            <Image
                                src={urlForImage(hero.portraitImage).width(900).height(1200).url()}
                                alt="Suelen Fonteles"
                                fill
                                priority
                                className="object-cover object-[center_20%]"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <span className="opacity-40 font-medium">Portrait Image</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
