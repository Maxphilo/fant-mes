import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papier: "#F6F1E7",
        encre: "#1B1A17",
        sapin: "#1F4D3A",
        brule: "#D9541E",
        sable: "#E8E0D0",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
