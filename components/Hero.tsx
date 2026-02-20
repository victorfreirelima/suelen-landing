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
        <section className="pt-[140px] pb-20 lg:pt-[190px] lg:pb-[140px] px-8 overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-white to-[#EFF6FF]">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div className="max-w-[580px]">
                    {badgeText && (
                        <div className="inline-flex items-center h-8 px-3 rounded-full bg-[#EFF6FF] border border-[#DEEAFB] mb-[30px]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#205BF0] mr-2" />
                            <span className="text-[#205BF0] text-[9.5px] font-bold uppercase tracking-[0.08em] mt-[1px]">
                                {badgeText}
                            </span>
                        </div>
                    )}
                    <h1 className="text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] mb-7">
                        {headlineParts.map((part, i) => (
                            i % 2 === 1 ? (
                                <span key={i} className="text-[#205BF0] block mt-1">
                                    {part}
                                </span>
                            ) : part
                        ))}
                    </h1>
                    <p className="text-[17px] text-[#4B5563] leading-[1.65] font-normal mb-11 max-w-[520px]">
                        {subheadline}
                    </p>
                    <div className="flex flex-wrap gap-[14px] mb-[44px]">
                        {primaryCta && (
                            <a
                                href={primaryCta.href}
                                className="bg-[#0A0F1F] text-white px-7 py-3.5 rounded-[10px] font-bold text-[13px] tracking-wide hover:bg-black transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                            >
                                {pickLocalized<string>(primaryCta.label, lang)}
                            </a>
                        )}
                        {secondaryCta && (
                            <a
                                href={secondaryCta.href}
                                className="bg-white border border-gray-200 text-black px-7 py-3.5 rounded-[10px] font-bold text-[13px] tracking-wide hover:bg-gray-50 transition-all"
                            >
                                {pickLocalized<string>(secondaryCta.label, lang)}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center space-x-[14px]">
                        {socialLinks.map((link: any, i: number) => {
                            const Icon = (Icons as any)[link.iconKey] || Icons.Share2;
                            return (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F3F4F6] text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="relative lg:ml-12 mt-6 lg:mt-0">
                    <div className="absolute inset-0 bg-[#f1f1f1] rounded-[24px] translate-x-4 translate-y-4 -z-10"></div>
                    <div className="relative z-10 w-full aspect-[4/4.5] rounded-[24px] overflow-hidden bg-gray-50 border-[10px] sm:border-[12px] border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
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
