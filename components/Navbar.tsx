import Link from "next/link";
import { Locale } from "@/lib/content";

interface NavbarProps {
    lang: Locale;
    data: {
        brandName: { text: string };
        navLinks: Array<{ label: { text: string }; anchorId: string }>;
        ctaButton: { label: { text: string }; anchorId: string };
    };
}

export default function Navbar({ lang, data }: NavbarProps) {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-gray-100 h-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <Link href={`/${lang}`} className="font-extrabold text-xl tracking-tight text-brand-dark flex items-center gap-2">
                    <span className="bg-brand-dark text-white w-8 h-8 flex items-center justify-center rounded-md text-base">S</span>
                    {data?.brandName?.text || "Suelen Fonteles"}
                </Link>

                {/* Dynamic Nav Links */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-gray-600">
                    {data?.navLinks?.map((link, i) => (
                        <Link key={i} href={`#${link.anchorId}`} className="hover:text-brand-dark transition-colors">
                            {link.label?.text}
                        </Link>
                    ))}
                </div>

                {/* Lang Switch & CTA */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-brand-gray-600">
                        <Link
                            href="/en"
                            className={lang === "en" ? "text-brand-blue underline underline-offset-4" : "hover:text-brand-dark transition-colors"}
                        >
                            EN
                        </Link>
                        <span className="text-brand-gray-200">|</span>
                        <Link
                            href="/pt-br"
                            className={lang === "pt-br" ? "text-brand-blue underline underline-offset-4" : "hover:text-brand-dark transition-colors"}
                        >
                            PT-BR
                        </Link>
                    </div>
                    <Link
                        href={`#${data?.ctaButton?.anchorId || "contact"}`}
                        className="hidden sm:block bg-brand-dark text-white px-6 py-2.5 rounded-md text-sm font-bold hover:opacity-90 transition-all"
                    >
                        {data?.ctaButton?.label?.text || (lang === "en" ? "Let's Connect" : "Vamos Conversar")}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
