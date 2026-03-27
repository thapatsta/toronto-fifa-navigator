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
        primary: {
          DEFAULT: "#1a237e",
          light: "#283593",
          dark: "#0d1642",
        },
        accent: {
          DEFAULT: "#d32f2f",
          light: "#ef5350",
          dark: "#b71c1c",
        },
        transit: "#2e7d32",
        warning: "#ef6c00",
        closure: "#c62828",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
