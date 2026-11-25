

import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROOMÉ | Find Your Space",
  description:
    "Discover and book campus spaces for studying, collaboration and creativity.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#383B40] bg-[#17191D]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">

        <Link href="/" className="text-3xl font-bold tracking-tight">
          <span className="text-[#F4F0E8]">
            ROOMÉ<span className="text-[#B8F36B]">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium text-[#A5A7A3] md:flex">
          <Link href="/#spaces" className="transition hover:text-[#B8F36B]">
            Explore Spaces
          </Link>

          <Link href="/about" className="transition hover:text-[#B8F36B]">
            About
          </Link>

          <Link
            href="/my-bookings"
            className="transition hover:text-[#B8F36B]"
          >
            My Bookings
          </Link>
        </div>

        <Link
          href="/#spaces"
          className="rounded-full bg-[#B8F36B] px-6 py-3 text-sm font-bold text-[#17191D] transition hover:bg-[#D0FF9A]"
        >
          Book a Space ↗
        </Link>

      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#383B40] bg-[#17191D] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>
          <p className="text-2xl font-bold">
            ROOMÉ<span className="text-[#B8F36B]">.</span>
          </p>

          <p className="mt-2 text-xs tracking-widest text-[#A5A7A3]">
            FIND YOUR SPACE. MAKE IT COUNT.
          </p>
        </div>

        <p className="text-xs text-[#A5A7A3]">
           ROOMÉ. All rights reserved.
        </p>


      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
