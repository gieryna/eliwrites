import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eli Gieryna",
  description: "Writer and content designer based in Kansas City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${baskerville.variable} ${dmSans.variable} antialiased`}>
        <div className="flex min-h-screen">
          <aside className="w-56 shrink-0 p-8 flex flex-col gap-8 border-r border-[#E8E6DC]">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight text-[#1C1C1A]">
              Eli Gieryna
            </Link>
            <nav className="flex flex-col gap-4 text-sm font-sans text-[#1C1C1A]">
              <Link href="/" className="hover:text-[#E8622A] transition-colors">Home</Link>
              <Link href="/work" className="hover:text-[#E8622A] transition-colors">Work</Link>
              <Link href="/about" className="hover:text-[#E8622A] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[#E8622A] transition-colors">Contact</Link>
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