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
        clay:     "#C1440E",
        terracotta: "#D4622A",
        rust:     "#A63D2F",
        cream:    "#F5F0E8",
        sand:     "#E8D5B7",
        bark:     "#5C3D2E",
        soil:     "#3B2314",
        driftwood:"#9E8572",
        moss:     "#6B7355",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        sans:  ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
