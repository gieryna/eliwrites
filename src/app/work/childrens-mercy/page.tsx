import Link from "next/link";

export default function ChildrensMercy() {
  return (
    <div className="max-w-2xl">

      {/* Hero */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          Content Strategy · UX Writing
        </p>
        <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-4 leading-tight">
          Putting patients and families first
        </h1>
        <p className="text-lg text-[#1C1C1A] leading-relaxed mb-8">
          A 3,500-page hospital website built for the institution, not the people who needed it most. We changed that.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-b border-[#E8E6DC] py-6">
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Role</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Digital Experience Manager</p>
          </div>
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Partners</p>
            <p className="font-sans text-sm text-[#1C1C1A]">UX Research, Design, Engineering, SEO</p>
          </div>
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Status</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Shipped</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          Overview
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          As Digital Experience Manager at Children's Mercy Hospital in Kansas City, I led a comprehensive redesign of the hospital's 3,500-page website. The site served researchers, referring providers, and donors — but its largest audience was patients and families.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          The previous design was clinical in nature. That worked fine for the institution. It did not work well for a parent searching for a doctor at midnight, scared about their child's health.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Section 1 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Research first, architecture second
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          We started by extensively researching our audiences and their needs. The site served a wide range of people, but patients and families were the primary audience — and the previous navigation did not reflect that. It reflected how the hospital thought about itself.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          We restructured the navigation and information architecture around what families actually came to do: make an appointment, find a doctor, learn about a condition. Those tasks moved to the front. Everything else followed.
        </p>
        <div className="bg-[#F5F3EC] border-l-4 border-[#B84318] p-6 mb-8">
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-2">Key insight</p>
          <p className="font-serif text-lg text-[#1C1C1A] leading-relaxed">
            A hospital website is not a brochure. For most families using it, something is already wrong. The site's job is to get them where they need to go, fast.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Tone and voice as a design decision
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          As part of the redesign, I developed comprehensive tone and voice guidelines for the site. The language across many areas was clinical and dense — appropriate for a medical journal, not for a family trying to understand their child's diagnosis.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          We simplified the language, made it warmer, and rewrote large sections of the site to better serve families who were already under stress. How you say something matters as much as what you say. On a hospital website, it can matter even more.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Tasks over marketing
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          User research was clear: people came to the site to do something. Make an appointment. Pay a bill. Find a doctor. The old site made them wade through marketing copy and multiple pages to get there.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-8">
          The redesigned homepage and navigation put those actions front and center. Tappable buttons. Immediate entry points. No unnecessary steps between a family and the thing they came to do.
        </p>
        <div className="bg-[#F5F3EC] border-l-4 border-[#B84318] p-6 mb-8">
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-2">Content challenge</p>
          <p className="font-serif text-lg text-[#1C1C1A] leading-relaxed">
            The site also had years of accumulated content debt: outdated pages, thin content, duplicates. As part of the broader content strategy, we consolidated and cleaned up the archive, standardized on-page SEO, and created content briefs to establish consistency across 3,500 pages.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-12" />

      {/* Impact */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          Impact
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          In the months following launch, site traffic increased 12% with improved SEO visibility. User satisfaction scores were markedly higher in post-launch testing. Task completion times dropped dramatically.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          Before the redesign, users needed 4-6 clicks to complete a typical task. After, it was 1-3. For a parent trying to get their kid an appointment, that is not a small thing.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-12" />

      {/* Nav */}
      <div className="flex justify-between items-center">
        <Link href="/work" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
          Back to work
        </Link>
      </div>

    </div>
  );
}