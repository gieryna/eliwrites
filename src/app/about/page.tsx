export default function About() {
  const principles = [
    {
      number: "01",
      title: "Empathy first.",
      description:
        "Good content starts with understanding the person reading it. I try to think: when I ___, I want to ___ so I can ___.",
    },
    {
      number: "02",
      title: "Story is structure.",
      description:
        "The way you tell a story matters as much as the story itself. Tone, voice, and medium all shape whether it lands.",
    },
    {
      number: "03",
      title: "Don't guess.",
      description:
        "Gut instinct is valuable. But knowing how to define success — and how to get better through testing — is what separates good content from great content.",
    },
  ];

  const brands = [
    "Meta",
    "Instagram",
    "Samsung",
    "Sherwin-Williams",
    "Betty Crocker",
    "Pillsbury",
    "Old El Paso",
  ];

  const askMeAbout = [
    { topic: "Tone and voice", emoji: "✍️" },
    { topic: "Trust as a content strategy", emoji: "🤝" },
    { topic: "The journalism-to-content-design pipeline", emoji: "📰" },
    { topic: "SNES NBA Jam", emoji: "🏀" },
    { topic: "The best barbecue in Kansas City", emoji: "🔥" },
    { topic: "What I'm reading to my kids", emoji: "📚" },
  ];

  return (
    <div className="max-w-3xl">

      {/* Bio + illustration placeholder */}
      <div className="grid grid-cols-3 gap-8 items-start mb-12">
        <div className="col-span-2">
          <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-5">
            About
          </h1>
          <p className="text-lg text-[#1C1C1A] leading-relaxed mb-4">
            I'm Eli — a writer and content designer based in Kansas City. I've spent my career helping teams find their voice, earn user trust, and say more with less.
          </p>
          <p className="text-lg text-[#1C1C1A] leading-relaxed">
            I started in journalism, which taught me to ask better questions, work in tight spaces, and always write for the human on the other end. Those instincts still shape everything I do.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start pt-2">
          <div className="w-full aspect-square border border-dashed border-[#E8E6DC] flex items-center justify-center">
            <p className="font-sans text-xs text-[#B84318] text-center px-4">
              illustration<br />placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-10" />

      {/* Principles */}
      <div className="mb-10">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-6">
          My approach
        </p>
        <div className="grid grid-cols-3 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-[#F5F3EC] p-6 relative overflow-hidden"
            >
              <span className="absolute top-2 right-3 font-serif text-6xl font-bold text-[#E8E6DC] select-none leading-none">
                {p.number}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1C1C1A] mb-3 relative">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-[#1C1C1A] leading-relaxed relative">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-10" />

      {/* Brands */}
      <div className="mb-10">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-4">
          Brands I've worked with
        </p>
        <p className="font-sans text-sm text-[#1C1C1A] leading-relaxed">
          {brands.join(" · ")}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E6DC] mb-10" />

      {/* Ask me about */}
      <div className="mb-10">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B84318] mb-6">
          Ask me about
        </p>
        <div className="grid grid-cols-2 gap-3">
          {askMeAbout.map((item) => (
            <div
              key={item.topic}
              className="border border-[#E8E6DC] p-4 flex items-start gap-3"
            >
              <span className="text-base">{item.emoji}</span>
              <span className="font-sans text-sm text-[#1C1C1A] leading-relaxed">
                {item.topic}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}