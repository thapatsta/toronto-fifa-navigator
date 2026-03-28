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
        navy:    { DEFAULT: "#0d1b2a", 2: "#162436" },
        primary: { DEFAULT: "#0d1b2a", light: "#162436" },
        accent:  { DEFAULT: "#cc2936", light: "#e53545", dark: "#a81f2b" },
        gold:    { DEFAULT: "#e8a020", light: "#f0b84a" },
        cream:   { DEFAULT: "#f5f0e8", 2: "#ede7d9" },
        transit: "#166534",
        warning: "#9a3412",
        closure: "#991b1b",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "system-ui", "sans-serif"],
        condensed: ["'Barlow Condensed'", "system-ui", "sans-serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
