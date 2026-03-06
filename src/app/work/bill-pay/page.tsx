import Link from "next/link";

export default function BillPay() {
  return (
    <div className="max-w-2xl">

      {/* Hero */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          UX Writing · Content Strategy
        </p>
        <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-4 leading-tight">
          Designing around limits: Creating a universal bill pay
        </h1>
        <p className="text-lg text-[#1C1C1A] leading-relaxed mb-8">
          Many user types, one outdated backend — and a content problem worth solving.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-b border-[#E8E6DC] py-6">
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Role</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Content Designer & Strategist</p>
          </div>
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Partners</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Product Design, PM, UX Research, Engineering</p>
          </div>
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-1">Status</p>
            <p className="font-sans text-sm text-[#1C1C1A]">Tested, not shipped</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          Overview
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          As part of the Healthy Benefits+ experience, users have the ability to pay bills using their benefits funds. Depending on how their benefits are configured, these could include utility, medical, cell phone, and more. It's a handy feature that users asked for.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          The downside is that our backend system was ancient and required us to design and write around some very real limitations to the experience. The challenge wasn't just technical — it was about being honest with users while keeping them moving forward.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Section 1 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Pulling together many flows into one
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          In the past, different teams had worked on bill pay functionality and there were scattered designs for each type of bill pay — HSA vs. FSA, medical bills vs. utility bills — all with their own terminology and quirks. Our goal was to audit and standardize these to make sure we had one unified bill pay experience.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          Users could also begin the bill pay process in different ways depending on what they were doing, so we made sure that accessing bill pay was intuitive and came at the right point in their journey.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          I partnered with my product designer to dial in how users could access bill pay and we settled on two places — their benefits home screen and a new up-top "quick action" function that was clearly labeled as "Pay a bill."
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Section 2 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Setting clear expectations
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          The backend system constraints gave us some unique challenges. Bills were not paid instantly. Sometimes the payment was sent electronically, which typically took 3-5 days. Other times, a manual check was cut and sent to the vendor, which could take up to 21 days — dependent on the bill provider.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-8">
          I worked to write content that set these expectations up front so users could plan for varied processing time that was likely longer than they expected. We also had internal logic where the system "chose" which account their bill was paid from. While this gave users the best allocation of their benefits, it also gave them less perceived control — and user testing showed this as a sticking point.
        </p>

        {/* Callout */}
        <div className="bg-[#F5F3EC] border-l-4 border-[#B84318] p-6 mb-8">
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-2">Key insight</p>
          <p className="font-serif text-lg text-[#1C1C1A] leading-relaxed">
            I proposed adding an explanation in a modal upfront that didn't gloss over the issue but framed why the product worked the way it did — in clear and honest terms.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Guiding users through the flow
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          Our audience was varied. The app had two distinct types of users: "Employer" audiences who used the app as part of benefits given to them by employers — typically younger and more tech-savvy — and "Payer" audiences who received benefits through Medicare and Medicaid and were often less familiar with apps and technology.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          These two distinct audiences meant we needed to design and write flows that were understandable for less tech-literate users but didn't feel patronizing to younger audiences.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-8">
          Terminology was also a core consideration. Did "provider" broadly cover any vendor who could send a bill? How did we differentiate between an "expense" and a "bill?" Getting this language right wasn't just cosmetic — it was the difference between users completing the flow or abandoning it in confusion.
        </p>

        {/* Callout */}
        <div className="bg-[#F5F3EC] border-l-4 border-[#B84318] p-6 mb-8">
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-2">Content challenge</p>
          <p className="font-serif text-lg text-[#1C1C1A] leading-relaxed">
            The flow had many decision points and branches — users needed to enter expense details, search for vetted providers, add new ones mid-flow, and add dependents without losing their place.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#F5F3EC] flex items-center justify-center mb-12">
        <p className="font-sans text-xs text-[#B84318]">image placeholder</p>
      </div>

      {/* Section 4 */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
          Wrapping it up with confirmation
        </h2>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          We'd already set up the user for success with a solid set of intro screens and a clearly-stepped flow. Now we needed a robust and clear confirmation section after the user went through the work of entering all of their claim details.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed mb-4">
          This is where we worked to again set expectations around processing times and account depletion logic. I worked with engineering to get clear constraints on what was possible to show the user after submission, which allowed us to design a "bill pay status" screen the user could return to check on progress.
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          By this point, the user had done the work to make it through the flow. Our job was to provide reassurance in plain language that the process had worked as expected.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-12" />

      {/* Impact */}
      <div className="mb-12">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#B84318] mb-4">
          Impact
        </p>
        <p className="text-base text-[#1C1C1A] leading-relaxed">
          This feature had not shipped to users when my time at Optum ended, but in-person user testing of the new flows showed significantly higher satisfaction and faster completion rates than previous bill pay flows. Working with UXR, we identified language tweaks that helped us consolidate and simplify the flow further.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-12" />

      {/* Next project */}
      <div className="flex justify-between items-center">
        <Link href="/work" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
          ← All work
        </Link>
        <Link href="/work" className="font-sans text-sm text-[#1C1C1A] hover:text-[#B84318] transition-colors">
          Next project →
        </Link>
      </div>

    </div>
  )
}