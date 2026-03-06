import Link from "next/link";
import Image from "next/image";
import Greeting from "@/components/Greeting";

export default function Home() {
  return (
    <div className="max-w-5xl">

      {/* Hero — two column */}
      <div className="grid grid-cols-2 gap-12 items-center mb-10">
        <div>
          <Greeting />
          <p className="text-lg text-[#1C1C1A] leading-relaxed mb-6 mt-4">
            Eli Gieryna is a writer and content designer based in Kansas City.
            He specializes in UX writing, content strategy, and storytelling for
            digital products. He's passionate about user empathy, clear
            language, and complaining about the Chicago Cubs.
          </p>
          <Link href="/work" className="text-[#B84318] hover:underline font-sans text-sm tracking-wide">
            See my work →
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/eli-headshot.jpg"
            alt="Eli Gieryna"
            className="w-56 h-56 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-10" />

      {/* Featured Work */}
      <div className="mb-10">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-5">
          Featured work
        </p>
        <Link href="/work/bill-pay" className="grid grid-cols-2 gap-12 items-center group">
          <div className="w-full aspect-video bg-[#F5F3EC] overflow-hidden flex items-center justify-center">
            <img
              src="/images/covers/cover-bill-pay.png"
              alt="Bill Pay case study"
              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-2">
              UX Writing · Content Strategy
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-3 group-hover:text-[#B84318] transition-colors">
              Designing around limits: Creating a universal bill pay
            </h2>
            <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
              Many user types, one outdated backend — and a content problem worth solving.
            </p>
            <span className="text-[#B84318] hover:underline font-sans text-sm tracking-wide">
              Read case study →
            </span>
          </div>
        </Link>
        <div className="mt-6">
          <Link href="/work" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
            View all work →
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-10" />

{/* Currently */}
<div className="mb-2">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-8">
          Currently
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#1C1C1A] mb-3">
              Reading
            </p>
            <p className="font-serif text-2xl text-[#1C1C1A] leading-snug">
              The Hobbit illustrated edition, aloud, to my kids.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#1C1C1A] mb-3">
              Thinking about
            </p>
            <p className="font-serif text-2xl text-[#1C1C1A] leading-snug">
              Dead Internet theory. But also summer vacation spots..
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#1C1C1A] mb-3">
              Outside
            </p>
            <p className="font-serif text-2xl text-[#1C1C1A] leading-snug">
              Kansas City in early spring. Finally.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/currently" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
            More of what I'm up to →
          </Link>
        </div>
      </div>

    </div>
  )
}