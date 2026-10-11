import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#15803d",
          600: "#166534",
          700: "#14532d",
          800: "#052e16",
          navy: {
            50: "#f0f4f8",
            100: "#d9e2ec",
            500: "#334e68",
            600: "#243b53",
            700: "#102a43",
            800: "#0b1d30",
            900: "#061320",
          },
          accent: {
            yellow: "#eab308",
            gold: "#d97706",
          }
        },
      },
    },
  },
  plugins: [],
};

export default config;
