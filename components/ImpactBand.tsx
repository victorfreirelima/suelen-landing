interface ImpactBandProps {
    data: {
        heading: { text: string };
        body: { text: string };
        stats: Array<{
            label: { text: string };
            value: string;
        }>;
    };
}

export default function ImpactBand({ data }: ImpactBandProps) {
    if (!data) return null;

    return (
        <section className="py-20 bg-white px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-brand-blue"></div>
                    <h2 className="text-2xl font-extrabold text-brand-dark">{data.heading?.text}</h2>
                </div>
                <div className="space-y-6">
                    {data.body?.text?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-base text-brand-gray-600 leading-relaxed">
                            {para}
                        </p>
                    )) || <p className="text-base text-brand-gray-600 leading-relaxed">No content available.</p>}
                </div>
            </div>
        </section>
    );
}
