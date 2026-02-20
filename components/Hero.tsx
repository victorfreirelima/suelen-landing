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
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div>
                    {badgeText && (
                        <span className="inline-block py-1.5 px-3 rounded-md bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-wider mb-6">
                            {badgeText}
                        </span>
                    )}
                    <h1 className="text-5xl lg:text-[5.5rem] font-extrabold leading-[1] tracking-tight mb-6">
                        {headlineParts.map((part, i) => (
                            i % 2 === 1 ? (
                                <span key={i} className="text-blue-600 block">
                                    {part}
                                </span>
                            ) : part
                        ))}
                    </h1>
                    <p className="text-lg lg:text-xl opacity-70 mb-10 leading-relaxed max-w-xl">
                        {subheadline}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {primaryCta && (
                            <a
                                href={primaryCta.href}
                                className="bg-black text-white px-8 py-3.5 rounded-md font-bold text-sm hover:opacity-90 transition-all"
                            >
                                {pickLocalized<string>(primaryCta.label, lang)}
                            </a>
                        )}
                        {secondaryCta && (
                            <a
                                href={secondaryCta.href}
                                className="bg-white border border-gray-200 text-black px-8 py-3.5 rounded-md font-bold text-sm hover:bg-gray-50 transition-all"
                            >
                                {pickLocalized<string>(secondaryCta.label, lang)}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center space-x-6 opacity-40">
                        {socialLinks.map((link: any, i: number) => {
                            const Icon = (Icons as any)[link.iconKey] || Icons.Share2;
                            return (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gray-100 rounded-2xl scale-[1.03] -z-10"></div>
                    <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border-[12px] border-white shadow-xl">
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
