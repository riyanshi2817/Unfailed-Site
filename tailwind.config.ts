import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        lightGold: "#EBD08A",
        nearBlack: "#0D0C0A",
        darkGray: "#2B2B2E",
        gray: "#7A8088",
        white: "#FFFFFF",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
      },
      fontSize: {
        'display-hero': ['64px', { lineHeight: '72px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-hero-mobile': ['38px', { lineHeight: '44px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg': ['44px', { lineHeight: '52px', letterSpacing: '-0.025em', fontWeight: '600' }],
        'headline-lg-mobile': ['30px', { lineHeight: '36px', letterSpacing: '-0.025em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-sm': ['22px', { lineHeight: '28px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' }],
        'eyebrow': ['11px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0', fontWeight: '400' }],
      },
      borderRadius: {
        DEFAULT: '4px',
        interactive: '4px',
        card: '4px',
        block: '8px',
      },
      boxShadow: {
        'gold-glow': '0 0 16px rgba(201,168,76,0.25)',
      },
      letterSpacing: {
        eyebrow: "0.08em",
      },
    },
  },
  plugins: [],
};
export default config;
