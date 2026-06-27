import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--bh-navy)",
        "deep-ink": "var(--bh-deep-ink)",
        amber: "var(--bh-warm-amber)",
        "blue-mist": "var(--bh-soft-blue-mist)",
        ivory: "var(--bh-warm-ivory)",
        slate: "var(--bh-slate-text)",
        "blue-gray": "var(--bh-border-blue-gray)",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        text: "720px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        ctaPressHint: {
          "0%, 84%, 100%": { transform: "translateY(0)" },
          "88%": { transform: "translateY(2px)" },
          "92%": { transform: "translateY(-1px)" },
          "96%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-down": "slideInDown 0.3s ease-out forwards",
        "cta-press-hint": "ctaPressHint 7.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
