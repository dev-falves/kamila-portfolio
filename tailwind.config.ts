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
        dark: {
          bg: "#0a0b0d",
          card: "rgba(18, 20, 26, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
  plugins: [],
};

export default config;