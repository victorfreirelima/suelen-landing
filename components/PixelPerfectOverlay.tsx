"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PixelPerfectOverlay() {
    const searchParams = useSearchParams();
    const [isVisible, setIsVisible] = useState(false);
    const [opacity, setOpacity] = useState(0.5);

    useEffect(() => {
        // Check URL param on mount
        if (searchParams.get("pp") === "1") {
            setIsVisible(true);
        }

        // Handle 'O' key press
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't trigger if user is typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }
            if (e.key.toLowerCase() === "o") {
                setIsVisible((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [searchParams]);

    if (!isVisible) return null;

    return (
        <>
            {/* Overlay Image */}
            <div
                className="fixed inset-0 z-[9999] pointer-events-none flex justify-center items-start overflow-hidden"
                style={{ opacity }}
            >
                <img
                    src="/reference.png"
                    alt="Design Reference Overlay"
                    className="w-full max-w-[1440px] h-auto origin-top"
                />
            </div>

            {/* Controls panel */}
            <div className="fixed top-4 right-4 z-[10000] bg-black text-white p-3 rounded-md shadow-lg flex flex-col gap-2 text-xs font-mono w-48 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">Pixel Perfect Mode</span>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-white"
                        title="Close (Press 'O')"
                    >
                        ×
                    </button>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <span>Opacity</span>
                        <span>{Math.round(opacity * 100)}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={opacity}
                        onChange={(e) => setOpacity(parseFloat(e.target.value))}
                        className="w-full cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="text-[10px] text-gray-400 mt-2">
                    Press 'O' to toggle overlay. Reference image must be at /public/reference.png
                </div>
            </div>
        </>
    );
}
