import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/content";
import { pickLocalized } from "@/lib/localization";
import { urlForImage } from "@/sanity/lib/image";

interface NavbarProps {
    lang: Locale;
    siteSettings: any;
    navigation: any[];
}

export default function Navbar({ lang, siteSettings, navigation }: NavbarProps) {
    const siteName = pickLocalized<string>(siteSettings?.siteName, lang) || "Suelen Fonteles";
    const logo = siteSettings?.logo;
    const primaryCta = siteSettings?.primaryCta;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md h-[72px] flex items-center border-b border-gray-100/50">
            <div className="max-w-[1200px] mx-auto px-8 w-full flex items-center justify-between">
                <Link href={`/${lang}`} className="font-extrabold text-[17px] tracking-tight flex items-center gap-2.5 text-[#0A0F1F]">
                    {logo ? (
                        <div className="relative w-7 h-7">
                            <Image src={urlForImage(logo).width(64).height(64).url()} alt={siteName} fill className="object-contain" />
                        </div>
                    ) : (
                        <span className="bg-[#0A0F1F] text-white w-7 h-7 flex items-center justify-center rounded-[6px] text-[13px] font-bold">S</span>
                    )}
                    {siteName}
                </Link>

                {/* Dynamic Nav Links */}
                <div className="hidden md:flex flex-1 justify-end pr-10 items-center space-x-10 text-[13px] font-semibold text-gray-500">
                    {navigation?.map((item, i) => (
                        <Link key={i} href={`#${item.targetSectionId}`} className="hover:text-black transition-colors">
                            {pickLocalized<string>(item.label, lang)}
                        </Link>
                    ))}

                    {/* Add language switcher here */}
                    <div className="flex items-center gap-1.5 ml-4">
                        <Link href="/en" className={`hover:text-black transition-colors ${lang === 'en' ? 'text-black' : ''}`}>EN</Link>
                        <span className="opacity-40">|</span>
                        <Link href="/pt-br" className={`hover:text-black transition-colors ${lang === 'pt-br' ? 'text-black' : ''}`}>PT</Link>
                    </div>
                </div>

                {/* CTA only */}
                <div className="flex items-center flex-shrink-0">
                    {primaryCta && (
                        <Link
                            href={primaryCta.href}
                            className="hidden md:inline-flex bg-[#0A0F1F] text-white px-7 py-3 rounded-[10px] text-[13px] font-bold tracking-wide hover:bg-black transition-all shadow-sm"
                        >
                            {pickLocalized<string>(primaryCta.label, lang)}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
