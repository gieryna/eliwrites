import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "bill-pay",
    title: "Designing around limits: Creating a universal bill pay",
    description: "Many user types, one outdated backend — and a content problem worth solving.",
    category: "UX Writing · Content Strategy",
    cover: "/images/covers/cover-bill-pay.png",
  },
  {
    slug: "meta-inform",
    title: "Racing to compliance: Meta Commerce and the federal INFORM Act",
    description: "New federal regulations, millions of sellers, and a hard deadline.",
    category: "Content Design · Content Strategy",
    cover: "/images/covers/cover-meta-inform.png",
  },
  {
    slug: "pillsbury",
    title: "Designing a better cooking experience for busy families",
    description: "Pillsbury had 8,000 recipe pages and 90% of their site traffic.",
    category: "Content Strategy · UX Design",
    cover: "/images/covers/cover-pillsbury.png",
  },
  {
    slug: "meta-onboarding",
    title: "Reducing friction for Facebook and Instagram sellers",
    description: "Too many steps, too much copy, and sellers dropping out before they ever opened a shop.",
    category: "Content Design · Content Strategy",
    cover: "/images/covers/cover-meta-onboarding.png",
  },
  {
    slug: "childrens-mercy",
    title: "Putting patients and families first",
    description: "A 3,500-page hospital website built for the institution, not the people who needed it most.",
    category: "Content Strategy · UX Writing",
    cover: "/images/covers/cover-childrens-mercy.png",
  },
];

export default function Work() {
  return (
    <div className="max-w-4xl">
      <h1 className="font-serif text-4xl font-bold text-[#1C1C1A] mb-4">
        Work
      </h1>
      <p className="text-base text-[#1C1C1A] leading-relaxed mb-12 max-w-xl">
        A selection of case studies in UX writing, content design, and storytelling.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group"
          >
            <div className="w-full aspect-video bg-[#F5F3EC] mb-4 overflow-hidden flex items-center justify-center">
              <Image
                src={project.cover}
                alt={project.title}
                width={600}
                height={600}
                className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <p className="text-xs font-sans uppercase tracking-widest text-[#B84318] mb-1">
              {project.category}
            </p>
            <h2 className="font-serif text-xl font-bold text-[#1C1C1A] mb-1 group-hover:text-[#B84318] transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-[#1C1C1A] leading-relaxed">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}