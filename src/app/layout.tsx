import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITZFIZZ - Scroll Driven Experience",
  description: "A premium scroll-driven animated hero section demonstrating frontend mastery with GSAP and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white bg-black`}>
        {children}
      </body>
    </html>
  );
}
