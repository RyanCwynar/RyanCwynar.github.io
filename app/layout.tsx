import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ryan Cwynar | Web Developer",
  description: "I build modern, fast websites for local businesses. If you're viewing a mockup I created, it means I think your current site could use an upgrade.",
  openGraph: {
    title: "Ryan Cwynar | Web Developer",
    description: "I build modern, fast websites for local businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
