import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Seed | Empowering Farmers Through Innovation",
  description: "Leading the way in agricultural excellence with high-quality seeds and sustainable farming solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-accent/30" suppressHydrationWarning>
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
