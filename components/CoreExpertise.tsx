import * as Icons from "lucide-react";

interface CoreExpertiseProps {
    data: {
        heading: { text: string };
        subtitle: { text: string };
        cards: Array<{
            iconName: string;
            title: { text: string };
            description: { text: string };
        }>;
    };
}

export default function CoreExpertise({ data }: CoreExpertiseProps) {
    if (!data) return null;

    return (
        <section id="expertise" className="py-24 lg:py-32 bg-brand-gray-50/30 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-brand-dark">{data.heading?.text}</h2>
                    <p className="text-brand-gray-600 text-sm max-w-xl mx-auto">{data.subtitle?.text}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.cards?.map((card, i) => {
                        const IconComponent = (Icons as any)[card.iconName] || Icons.CheckCircle2;
                        return (
                            <div key={i} className="p-8 pb-10 rounded-2xl bg-white border border-brand-gray-100 shadow-soft hover:shadow-md transition-all">
                                <div className="p-2 w-fit rounded-md bg-brand-gray-50 mb-6">
                                    <IconComponent className="w-5 h-5 text-brand-dark" />
                                </div>
                                <h3 className="text-lg font-extrabold mb-3 text-brand-dark">{card.title?.text}</h3>
                                <p className="text-brand-gray-600 leading-relaxed text-[13px]">
                                    {card.description?.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
