import { Quote } from "lucide-react";

interface WhyWorkWithMeProps {
    data: {
        heading: { text: string };
        features: Array<{
            title: { text: string };
            description: { text: string };
        }>;
        testimonial: {
            quote: { text: string };
            name: string;
            roleCompany: { text: string };
        };
    };
}

export default function WhyWorkWithMe({ data }: WhyWorkWithMeProps) {
    if (!data) return null;

    return (
        <section id="why-me" className="py-24 lg:py-32 bg-brand-dark text-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
                    {/* Left: Content and Features */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 leading-tight">
                            {data.heading?.text}
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-10">
                            {data.features?.map((feature, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                                        <h3 className="text-sm font-extrabold uppercase tracking-wide">{feature.title?.text}</h3>
                                    </div>
                                    <p className="text-brand-gray-400 text-[13px] leading-relaxed">
                                        {feature.description?.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Testimonial Card */}
                    <div className="relative">
                        <div className="bg-[#111827] border border-white/5 p-8 lg:p-12 rounded-2xl shadow-2xl">
                            <p className="text-lg lg:text-xl font-medium leading-relaxed mb-10 italic text-brand-gray-100">
                                "{data.testimonial?.quote?.text}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-brand-gray-600/30 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-brand-gray-400/50"></div>
                                </div>
                                <div>
                                    <p className="font-extrabold text-sm">{data.testimonial?.name}</p>
                                    <p className="text-brand-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">
                                        {data.testimonial?.roleCompany?.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
