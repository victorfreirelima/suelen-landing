interface FooterProps {
    data: {
        smallText: { text: string };
    };
}

export default function Footer({ data }: FooterProps) {
    if (!data) return null;

    return (
        <footer className="py-12 border-t border-brand-gray-100 bg-white px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                <p className="text-brand-gray-400 text-xs font-medium">
                    {data?.smallText?.text || "© 2024 Suelen Fonteles"}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold">
                    <div className="flex items-center gap-1.5 text-[#10b981]">
                        <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                        Available for Hire
                    </div>
                    <span className="text-brand-gray-400">Vancouver, Canada | Remote</span>
                </div>
            </div>
        </footer>
    );
}
