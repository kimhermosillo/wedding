import type { Metadata } from "next";
import { Beth_Ellen, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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


const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  subsets: ["latin"],
  weight: "400"
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: "500"
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
        className={`${cormorant.variable} ${bethEllen.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <div className="flex justify-around p-8  min-w-full">
            <Link className=" transition-transform duration-300 ease-in-out hover:scale-110 transition-colors duration-300 ease-in-out  hover:text-lime-700" href="/" >Home</Link>
            <Link className=" transition-transform duration-300 ease-in-out hover:scale-110 transition-colors duration-300 ease-in-out hover:text-lime-700" href="/about">About</Link>
            <Link className=" transition-transform duration-300 ease-in-out hover:scale-110 transition-colors duration-300 ease-in-out hover:text-lime-700" href="/schedule">Schedule</Link>
            <Link className="transition-transform duration-300 ease-in-out hover:scale-110 transition-colors duration-300 ease-in-out  hover:text-lime-700" href="/rsvp">RSVP</Link>
            <p className="transition-colors duration-300 ease-in-out text-gray-500 hover:text-lime-700 animate-pulse text-7xl font-[family-name:var(--font-beth-ellen)]">Kim & Sal</p>

          </div>
          <main className="flex flex-col gap-[32px]  items-center sm:items-start font-[family-name:var(--font-cormorant-garamond)] text-xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
