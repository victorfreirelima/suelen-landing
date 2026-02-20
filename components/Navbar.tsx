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
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <Link href={`/${lang}`} className="font-extrabold text-xl tracking-tight flex items-center gap-2">
                    {logo ? (
                        <div className="relative w-8 h-8">
                            <Image src={urlForImage(logo).width(64).height(64).url()} alt={siteName} fill className="object-contain" />
                        </div>
                    ) : (
                        <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md text-base">S</span>
                    )}
                    {siteName}
                </Link>

                {/* Dynamic Nav Links */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium opacity-70">
                    {navigation?.map((item, i) => (
                        <Link key={i} href={`#${item.targetSectionId}`} className="hover:opacity-100 transition-opacity">
                            {pickLocalized<string>(item.label, lang)}
                        </Link>
                    ))}
                </div>

                {/* Lang Switch & CTA */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider opacity-60">
                        <Link
                            href="/en"
                            className={lang === "en" ? "text-blue-600 underline underline-offset-4" : "hover:opacity-100 transition-opacity"}
                        >
                            EN
                        </Link>
                        <span className="opacity-20">|</span>
                        <Link
                            href="/pt-br"
                            className={lang === "pt-br" ? "text-blue-600 underline underline-offset-4" : "hover:opacity-100 transition-opacity"}
                        >
                            PT-BR
                        </Link>
                    </div>
                    {primaryCta && (
                        <Link
                            href={primaryCta.href}
                            className="hidden sm:block bg-black text-white px-6 py-2.5 rounded-md text-sm font-bold hover:opacity-90 transition-all"
                        >
                            {pickLocalized<string>(primaryCta.label, lang)}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
