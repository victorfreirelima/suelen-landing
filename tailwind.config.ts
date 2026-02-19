import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#0070f3", // More vibrant blue from screenshot
                    dark: "#0a0a0a", // Deep dark for sections
                    gray: {
                        50: "#f9fafb",
                        100: "#f3f4f6",
                        200: "#e5e7eb",
                        600: "#4b5563",
                    }
                },
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
};
export default config;
