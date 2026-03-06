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

  <nav className="flex flex-col gap-1 text-sm font-sans text-[#1C1C1A]">
    <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Home
    </Link>
    <Link href="/work" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
  <span className="hand-underline">Work</span>
</Link>
    <Link href="/about" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
      About
    </Link>
    <Link href="/contact" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Contact
    </Link>
  </nav>

  <div className="border-t border-[#E8E6DC]" />

  <div className="flex flex-col gap-1">
    <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-2">Connect</p>
    <a href="https://www.linkedin.com/in/eligieryna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm font-sans text-[#1C1C1A] rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      LinkedIn
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-sans text-[#1C1C1A] rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Resume
    </a>
    <a href="https://github.com/gieryna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm font-sans text-[#1C1C1A] rounded hover:bg-[#F5F3EC] hover:text-[#B84318] transition-colors">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
      GitHub
    </a>
  </div>
</aside>
          <main className="flex-1 p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}