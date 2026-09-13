import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Umair Khan — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js, MERN Stack, TypeScript, Python, and Django. Building scalable, performant, and user-focused web applications.",
  keywords: [
    "Muhammad Umair Khan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Node.js Developer",
    "TypeScript",
    "Python Django",
    "Web3 Developer",
  ],
  authors: [{ name: "Muhammad Umair Khan" }],
  creator: "Muhammad Umair Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Umair Khan — Full Stack Developer",
    description:
      "Building scalable, performant, and user-focused web applications across frontend, backend, real-time systems, and emerging technologies.",
    siteName: "Muhammad Umair Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umair Khan — Full Stack Developer",
    description:
      "Building scalable, performant, and user-focused web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
