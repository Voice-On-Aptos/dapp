import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: "#00B2A1",
        teal: "#046B61",
        gainsboro: "#D7D9DD",
        "gainsboro-2": "#D9D9D9",
        "shark-3": "#292D32",
        "white-smoke": "#F7F7F8",
        "white-smoke-2": "#F7F7F7",
        "white-smoke-3": "#EEEEEF",
        "white-smoke-4": "#E9EAEB",
        "white-smoke-5": "#F8F8F8",
        gallery: "#F0F1F1",
        gray: "#818488",
        abbey: "#4B5056",
        athens: "#E7E9EE",
        mako: "#404449",
        "dove-gray": "#727375",
        azure: "#EEFBFC",
        "azure-2": "#E7F8F9",
        "alice-blue": "#EDF2F7",
        "old-lace": "#FFF4DF",
        "golden-rod": "#DB950D",
        "sun-glow": "#FFB320",
        twilight: "#F0FBFC",
        "dark-gray": "#AAAAAA",
      },
      fontSize: {
        s9: ["0.5625rem", "0.67rem"],
        s10: ["0.625rem", "0.74rem"],
        s13: ["0.81rem", "0.99rem"],
        s20: ["1.25rem", "1.88rem"],
        s26: ["1.625rem", "1.98rem"],
        s34: ["2.13rem", "1.69rem"],
        s46: ["2.88rem", "3.51rem"],
        s54: ["3.38rem", "3.38rem"],
      },
      spacing: {
        "18": "1.125rem",
      },
      dropShadow: {
        card: "0px -1px 20px #0000000D",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
