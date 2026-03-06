import Link from "next/link";
import Greeting from "@/components/Greeting";

export default function Home() {
  return (
    <div className="max-w-5xl">

      {/* Hero — two column */}
      <div className="grid grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Greeting />
          <p className="text-lg text-[#1C1C1A] leading-relaxed mb-8 mt-6">
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
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-16" />

      {/* Featured Work */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-6">
          Featured
        </p>
        <div className="grid grid-cols-2 gap-12 items-center group cursor-pointer">
          <div className="w-full aspect-video bg-[#E8E6DC] group-hover:bg-[#D8D6CC] transition-colors duration-300" />
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-2">
              UX Writing
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-3 group-hover:text-[#B84318] transition-colors">
              Project Title Goes Here
            </h2>
            <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
              A one or two sentence description of the case study and what made it interesting or challenging.
            </p>
            <Link href="/work" className="text-[#B84318] hover:underline font-sans text-sm tracking-wide">
              Read case study →
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/work" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
            View all work →
          </Link>
        </div>
      </div>

    </div>
  )
}