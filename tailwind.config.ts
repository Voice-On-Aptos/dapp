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
      },
      fontSize: {
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
