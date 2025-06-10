import type { Metadata } from "next";
import { Geist, Geist_Mono, Homemade_Apple } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Kim and Sal",
  description: "We are getting married!! Wooohoooooo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${homemadeApple.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <div className="flex justify-around p-8  min-w-full">
            <Link href="/" >Home</Link>
            <Link href="/about">About</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/rsvp">RSVP</Link>
          </div>
          <main className="flex flex-col gap-[32px]  items-center sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
