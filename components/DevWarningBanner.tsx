"use client";

import { AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function DevWarningBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show in development but only if projectId is missing
        if (process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:right-4 md:w-96">
            <div className="bg-amber-50 border border-amber-200 rounded-lg shadow-lg p-4 flex items-start gap-3">
                <div className="text-amber-500 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-bold text-amber-800">Developer Mode</h3>
                    <p className="text-xs text-amber-700 mt-1">
                        Sanity Project ID is missing. Using mock fallback content.
                        Configure <code className="bg-amber-100 px-1 rounded">.env.local</code> to see your CMS content.
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-amber-400 hover:text-amber-500 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
