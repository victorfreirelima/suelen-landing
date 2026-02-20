import type { Config } from "tailwindcss";
import { tokens } from "./lib/tokens";

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
                brand: tokens.colors.brand,
                bg: tokens.colors.background,
                tx: tokens.colors.text,
                bd: tokens.colors.border,
            },
            fontSize: tokens.typography.size as any,
            borderRadius: tokens.radius,
            boxShadow: tokens.shadows,
        },
    },
    plugins: [],
};
export default config;
