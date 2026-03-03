import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eli Gieryna",
  description: "Writer and strategist based in the PNW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <div className="flex min-h-screen">
          <aside className="w-56 shrink-0 p-8 flex flex-col gap-8 border-r border-[#CDB887]">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight text-[#364D4A]">
              Eli Gieryna
            </Link>
            <nav className="flex flex-col gap-4 text-sm font-sans text-[#364D4A]">
              <Link href="/" className="hover:text-[#A96F3D] transition-colors">Home</Link>
              <Link href="/work" className="hover:text-[#A96F3D] transition-colors">Work</Link>
              <Link href="/about" className="hover:text-[#A96F3D] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[#A96F3D] transition-colors">Contact</Link>
            </nav>
          </aside>
          <main className="flex-1 p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}