import { Linkedin, Mail } from "lucide-react";

interface FinalCTAProps {
    data: {
        heading: { text: string };
        body: { text: string };
        buttons: Array<{
            label: { text: string };
            url: string;
        }>;
    };
}

export default function FinalCTA({ data }: FinalCTAProps) {
    if (!data) return null;

    return (
        <section className="py-24 lg:py-32 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-[1.1] text-brand-dark tracking-tight">
                    {data.heading?.text}
                </h2>
                <p className="text-base text-brand-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                    {data.body?.text}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {data.buttons?.map((btn, i) => {
                        const isLinkedIn = btn.url?.includes('linkedin.com');

                        return (
                            <a
                                key={i}
                                href={btn.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-8 py-3.5 rounded-md font-bold text-sm flex items-center transition-all ${i === 0
                                    ? "bg-[#0070f3] text-white hover:opacity-90"
                                    : "bg-white border border-brand-gray-200 text-brand-dark hover:bg-brand-gray-50"
                                    }`}
                            >
                                {isLinkedIn && <Linkedin className="mr-2 w-4 h-4 fill-current" />}
                                {!isLinkedIn && <Mail className="mr-2 w-4 h-4" />}
                                {btn.label?.text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
