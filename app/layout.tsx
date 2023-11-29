import type { Metadata } from "next";
import "./globals.css";
import { poppins, customFont } from "./fonts";
import Header from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "MKS",
  description: "Explore, Thrive, and Live Globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${customFont.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
