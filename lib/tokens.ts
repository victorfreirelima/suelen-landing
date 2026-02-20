export const tokens = {
    colors: {
        brand: {
            blue: "#2563EB",
            dark: "#0A0F1F",
            accent: "#205BF0",
            green: {
                dot: "#22C55E",
            }
        },
        background: {
            primary: "#FFFFFF",
            secondary: "#F8F9FA",
            dark: "#0A0F1F",
            gradientStart: "rgba(238, 242, 255, 0.5)",
            gradientMid: "#FFFFFF",
            gradientEnd: "rgba(239, 246, 255, 0.5)",
        },
        text: {
            primary: "#111827",
            secondary: "#4B5563",
            muted: "rgba(17, 24, 39, 0.6)",
            inverse: "#FFFFFF",
            inverseMuted: "rgba(255, 255, 255, 0.6)",
        },
        border: {
            light: "#E5E7EB",
            image: "#FFFFFF",
        }
    },
    typography: {
        size: {
            hero: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
            h2: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
            h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "normal" }],
            body: ["1.125rem", { lineHeight: "1.625", letterSpacing: "normal" }],
            small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "normal" }],
            tiny: ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
        }
    },
    radius: {
        badge: "0.375rem",
        button: "0.75rem",
        card: "1rem",
        heroImage: "2rem",
    },
    shadows: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        heroImage: "0 20px 40px -15px rgba(0,0,0,0.05)",
        buttonPrimary: "0 4px 14px 0 rgba(37, 99, 235, 0.2)",
        dotGlow: "0 0 8px rgba(34, 197, 94, 0.6)",
    }
};
