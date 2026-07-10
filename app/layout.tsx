import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaishnavi | AI & ML Engineer",
  description:
    "Official portfolio of Vaishnavi, an AI & Machine Learning Engineer specializing in Computer Vision, NLP, Deep Learning, and Full Stack Development.",
  authors: [{ name: "Vaishnavi V" }],
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Python",
    "Computer Vision",
    "Deep Learning",
    "Portfolio",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}