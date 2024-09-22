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
        "blue-chill": "#0798A0",
        gainsboro: "#D7D9DD",
        "gainsboro-2": "#D9D9D9",
        "gainsboro-3": "#DBDBDB",
        "gainsboro-4": "#D0D5DD",
        mist: "#8F8F8F",
        shark: "#1E1E1E",
        "shark-2": "#202020",
        "shark-3": "#292D32",
        "white-smoke": "#F7F7F8",
        "white-smoke-2": "#F7F7F7",
        "white-smoke-3": "#EEEEEF",
        "white-smoke-4": "#E9EAEB",
        "white-smoke-5": "#F8F8F8",
        "wood-smoke": "#121818",
        gallery: "#F0F1F1",
        "gallery-2": "#ECECEC",
        gray: "#818488",
        abbey: "#4B5056",
        athens: "#E7E9EE",
        "athens-2": "#EEF1F5",
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
        porcelain: "#EFF1F3",
        beige: "#E7FFEF",
        apple: "#05A83D",
        emerald: "#70D994",
        "slate-grey": "#344054",
        haze: "#F6F7F9",
        squeeze: "#F3FEFF",
        serenade: "#FFF8ED",
        gamboge: "#E2990C",
        mirage: "#17222E",
        "mirage-2": "#101828",
        tundora: "#484848",
        alabaster: "#FAFAFA",
        "storm-gray": "#667085",
        "ghost-white": "#F5F7FC",
        concrete: "#F0F1F2",
        "rose-white": "#FFF9F7",
        scarlet: "#FF2F00",
      },
      fontSize: {
        s9: ["0.5625rem", "0.67rem"],
        s10: ["0.625rem", "0.74rem"],
        s13: ["0.81rem", "0.99rem"],
        s20: ["1.25rem", "1.88rem"],
        s22: ["1.38rem", "1.68rem"],
        s26: ["1.625rem", "1.98rem"],
        s28: ["1.75rem", "2.14rem"],
        s32: ["2rem", "2.44rem"],
        s34: ["2.13rem", "1.69rem"],
        s46: ["2.88rem", "3.51rem"],
        s54: ["3.38rem", "3.38rem"],
      },
      spacing: {
        "18": "1.125rem",
      },
      boxShadow: {
        btn: "0px 1px 2px #1018280D",
      },
      dropShadow: {
        card: "0px -1px 20px #0000000D",
        popover: "0px 1px 4px #0C0C0D0D",
        tab: "0px 1px 4px #00000012",
        image: "0px 9.75px 13px #1018281A",
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
