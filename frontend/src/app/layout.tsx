import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokesh Goyal | Full Stack & Gen AI Developer",
  description: "Portfolio of Lokesh Goyal, a Senior Full Stack Software Engineer and Gen AI developer with 4+ years of experience building high-performance fintech, GIS, and medical equipment tracking applications.",
  keywords: [
    "Lokesh Goyal",
    "Software Engineer",
    "Full Stack Developer",
    "Gen AI Developer",
    "C# Developer",
    "ASP.NET Core",
    "Angular Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Faridabad",
    "Noida"
  ],
  authors: [{ name: "Lokesh Goyal" }],
  creator: "Lokesh Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lokeshgoyal.dev",
    title: "Lokesh Goyal | Full Stack & Gen AI Developer",
    description: "Portfolio of Lokesh Goyal, a Senior Full Stack Software Engineer and Gen AI developer with 4+ years of experience.",
    siteName: "Lokesh Goyal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Goyal | Full Stack & Gen AI Developer",
    description: "Portfolio of Lokesh Goyal, a Senior Full Stack Software Engineer and Gen AI developer with 4+ years of experience.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen relative antialiased selection:bg-blue-500/10 selection:text-blue-800">
        {children}
      </body>
    </html>
  );
}
