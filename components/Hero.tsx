import Image from "next/image";
import { Linkedin, Twitter, Target, ArrowRight } from "lucide-react";
import { Locale } from "@/lib/content";
import { urlForImage } from "@/sanity/lib/image";

interface HeroProps {
    lang: Locale;
    data: {
        labelPill: { text: string };
        headline: { text: string };
        highlightWord: { text: string };
        subheadline: { text: string };
        primaryCTA: { label: { text: string }; anchorId: string };
        secondaryCTA: { label: { text: string }; anchorId: string };
        portraitImage: any;
        socialLinks: Array<{ iconName: string; url: string }>;
    };
}

export default function Hero({ lang, data }: HeroProps) {
    if (!data) return null;

    return (
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div>
                    {data.labelPill?.text && (
                        <span className="inline-block py-1.5 px-3 rounded-md bg-blue-50 text-brand-blue text-[10px] font-extrabold uppercase tracking-wider mb-6">
                            {data.labelPill.text}
                        </span>
                    )}
                    <h1 className="text-5xl lg:text-[5.5rem] font-extrabold leading-[1] tracking-tight text-brand-dark mb-6">
                        {data.headline?.text?.replace(data.highlightWord?.text || "", "")}
                        {data.highlightWord?.text && (
                            <span className="text-brand-blue block">
                                {data.highlightWord.text}
                            </span>
                        )}
                    </h1>
                    <p className="text-lg lg:text-xl text-brand-gray-600 mb-10 leading-relaxed max-w-xl">
                        {data.subheadline?.text}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {data.primaryCTA && (
                            <a
                                href={`#${data.primaryCTA.anchorId}`}
                                className="bg-brand-dark text-white px-8 py-3.5 rounded-md font-bold text-sm hover:opacity-90 transition-all"
                            >
                                {data.primaryCTA.label?.text}
                            </a>
                        )}
                        {data.secondaryCTA && (
                            <a
                                href={`#${data.secondaryCTA.anchorId}`}
                                className="bg-white border border-brand-gray-200 text-brand-dark px-8 py-3.5 rounded-md font-bold text-sm hover:bg-brand-gray-50 transition-all"
                            >
                                {data.secondaryCTA.label?.text}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center space-x-6 text-brand-gray-200">
                        {/* Static social placeholders for layout as in screenshot */}
                        <div className="w-5 h-5 bg-brand-gray-200 rounded-sm"></div>
                        <div className="w-5 h-5 bg-brand-gray-200 rounded-sm"></div>
                        <div className="w-5 h-5 bg-brand-gray-200 rounded-sm"></div>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-gray-100 rounded-2xl scale-[1.03] -z-10 shadow-soft"></div>
                    <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-gray-50 border-[12px] border-white shadow-xl">
                        {data.portraitImage ? (
                            <Image
                                src={urlForImage(data.portraitImage).width(900).height(1200).url()}
                                alt="Suelen Fonteles"
                                fill
                                priority
                                className="object-cover object-[center_20%]"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-brand-gray-100">
                                <span className="text-brand-gray-400 font-medium">Portrait Image</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
