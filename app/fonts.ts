import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari", "latin-ext"],
});

export const customFont = localFont({
  src: "../public/fonts/Futura-Heavy-font.ttf",
  display: "swap",
  variable: "--font-futura",
});
