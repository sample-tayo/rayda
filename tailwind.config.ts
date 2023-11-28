import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-poppins)`],
        futura: [`var(--font-futura)`],
      },
      colors: {
        heroBg: "#FFF9EE",
        primary: "#FFF9EE",
        accent1: "#E79310",
        accent2: "#181E4B",
        accent3: "#5E6282",
        darkBg: "#212832",
        success: "#5DAE1D",
        darkText: "#14183E",
        warnig: "#F0BB1F",
        move: "#5EAD1F",
        taxi: "#039CDF",
      },
    },
  },
  plugins: [],
};
export default config;
