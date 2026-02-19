interface ProfessionalJourneyProps {
    data: {
        heading: { text: string };
        roles: Array<{
            title: { text: string };
            org: { text: string };
            dateBadge: string;
            bullets: Array<{ text: string }>;
        }>;
    };
}

export default function ProfessionalJourney({ data }: ProfessionalJourneyProps) {
    if (!data) return null;

    return (
        <section id="journey" className="py-24 lg:py-32 bg-white px-6 border-t border-slate-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold mb-20 text-center text-slate-900">{data.heading?.text}</h2>
                <div className="space-y-24">
                    {data.roles?.map((role, i) => (
                        <div key={i} className="relative grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
                            {/* Role & Org (Left) */}
                            <div className="text-left">
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{role.title?.text}</h3>
                                <p className="text-brand-blue font-bold text-lg mb-6">{role.org?.text}</p>
                                <ul className="space-y-4">
                                    {role.bullets?.map((bullet, idx) => (
                                        <li key={idx} className="text-slate-500 text-sm flex items-start space-x-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                                            <span>{bullet.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Center Line Marker */}
                            <div className="hidden md:flex flex-col items-center h-full">
                                <div className="w-4 h-4 rounded-full border-4 border-slate-100 bg-brand-blue shadow-sm z-10"></div>
                                <div className="w-[2px] flex-1 bg-slate-100 mt-2"></div>
                            </div>

                            {/* Date Badge (Right) */}
                            <div className="md:text-right md:pt-1">
                                <span className="inline-block py-1.5 px-4 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-slate-200">
                                    {role.dateBadge}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
