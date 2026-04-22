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
  title: "Blog-tz",
  description: "TZ for RGB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className={'w-full sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm max-w-4xl mx-auto px-6 h-16 flex items-center justify-between'}>
          Blog-tz
        </header>
        {children}
      </body>
    </html>
  );
}
