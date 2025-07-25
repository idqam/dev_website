import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owen Villareal | Software Engineer",
  description: "Owen Villareal | Software Engineer",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white font-sans`}
      >
        <Navbar />
        <main className="mt-28 px-4 flex justify-center">
          <div className="w-full max-w-6xl bg-slate-900 min-h-screen rounded-xl shadow-md">
            {children}
          </div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
