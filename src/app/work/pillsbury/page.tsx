import Link from "next/link";

export default function Pillsbury() {
  return (
    <div className="max-w-2xl">

      {/* Hero */}
      <div className="mb-12">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-4">
          Content Strategy · UX Design
        </p>
        <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-4 leading-tight">
          Designing a better cooking experience for busy families
        </h1>
        <p className="text-lg text-[#1C1C1A] leading-relaxed mb-8">
          Pillsbury had 8,000 recipe pages and 90% of their site traffic. The question was whether those pages were actually working for the people using them.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-b border-[#E8E6DC] py-6">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-1">Role</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Content Strategy, UX Design</p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-1">Partners</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Creative Director, Engineering, SEO, Pillsbury Brand Team</p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-1">Status</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Shipped</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-4">
          Overview
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          While at VMLY&amp;R, I led content strategy for the redesign of the most important area of Pillsburys website: their recipe pages. With 90% of site traffic flowing to 8,000 recipe pages from organic search and social, these pages were doing a lot of heavy lifting.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          User research told us the typical Pillsbury visitor was a busy parent who usually had no idea what they were serving for dinner at 2 p.m. That insight shaped everything.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Section 1 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Start with what the user actually needs
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          A busy parent landing on a recipe page at 2 p.m. needs to make a fast decision. How many ingredients? How long does it take? Is this something my family will actually eat? The old page buried these answers. The redesign surfaced them immediately.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          I started with content blocking rather than visual design, mapping the hierarchy of information before any layouts were drawn. Cook time, ingredient count, and reviews moved to the top. A larger photo window gave the food the visual presence it deserved, especially as Pillsbury was reshooting recipes with more modern photography.
        </p>
        <div className="bg-[#F5F3EC] border-l-4 border-[#B84318] p-6 mb-8">
          <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-2">Content principle</p>
          <p className="font-serif text-lg text-[#1C1C1A] leading-relaxed">
            Scannability is a form of respect. If a user has 30 seconds to decide whether to make your recipe, your page should work within that constraint, not against it.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Adding features that earn their place
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          Beyond the core layout, we added features that solved real problems. A keep-screen-on functionality meant users could follow a recipe without their phone going dark mid-step. Better ingredient integration let users move directly from the recipe to shopping. Related recipes on the right rail improved internal linking for SEO.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          Each addition was evaluated against the same question: does this make the experience better for a busy person trying to get dinner on the table?
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-12" />

      {/* Impact */}
      <div className="mb-12">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-4">
          Impact
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          In the months following the redesign, on-page performance improved across the board. Dwell time increased. Scroll depth increased. Pages per visit increased. Users were spending more time with the content and exploring more of the site.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          When 90% of your traffic goes to one type of page, getting that page right matters. This one did.
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