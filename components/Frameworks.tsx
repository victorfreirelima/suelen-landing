import { CheckCircle2 } from "lucide-react";

interface FrameworksSectionProps {
    data: {
        heading: { text: string };
        body: { text: string };
        bullets: Array<{ text: string }>;
        rightCardSteps: Array<{
            number: string;
            title: { text: string };
            description: { text: string };
        }>;
    };
}

export default function Frameworks({ data }: FrameworksSectionProps) {
    if (!data) return null;

    return (
        <section id="strategy" className="py-24 lg:py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left: Content and Checklist */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-brand-dark tracking-tight leading-[1.1]">
                        {data.heading?.text}
                    </h2>
                    <p className="text-base text-brand-gray-600 mb-10 leading-relaxed max-w-lg">
                        {data.body?.text}
                    </p>
                    <ul className="space-y-4">
                        {data.bullets?.map((item, i) => (
                            <li key={i} className="flex items-center space-x-3 text-[13px] font-bold text-brand-dark">
                                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                                    <CheckCircle2 className="w-3 h-3 fill-current" />
                                </div>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Floating Numbered Card */}
                <div className="relative">
                    <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-soft border border-brand-gray-100">
                        <div className="space-y-8">
                            {data.rightCardSteps?.map((step, i) => (
                                <div key={i} className="flex gap-5">
                                    <span className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center text-sm font-bold shrink-0">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-extrabold text-brand-dark mb-1">{step.title?.text}</h3>
                                        <p className="text-brand-gray-600 text-[13px] leading-relaxed">{step.description?.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
