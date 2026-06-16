import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KnoxGrowth | AI Business Automation Platform",
  description:
    "KnoxGrowth automates your calls, follow-ups, and lead pipeline so you can focus on running your business. Stop losing leads, start closing deals.",
  keywords: [
    "AI automation",
    "business automation",
    "lead generation",
    "CRM",
    "small business",
    "call automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col bg-background text-foreground ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
