const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short one-line description of the work.",
    category: "UX Writing",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short one-line description of the work.",
    category: "Content Strategy",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short one-line description of the work.",
    category: "UX Writing",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A short one-line description of the work.",
    category: "Storytelling",
  },
  {
    id: 5,
    title: "Project Five",
    description: "A short one-line description of the work.",
    category: "Content Design",
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
          <div
            key={project.id}
            className="group cursor-pointer"
          >
            <div className="w-full aspect-video bg-[#E8E6DC] mb-4 overflow-hidden">
            <div className="w-full h-full bg-[#E8E6DC] group-hover:bg-[#D8D6CC] transition-colors duration-300" />            </div>
            <p className="text-xs font-sans uppercase tracking-widest text-[#B84318] mb-1">
              {project.category}
            </p>
            <h2 className="font-serif text-xl font-bold text-[#1C1C1A] mb-1 group-hover:text-[#B84318] transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-[#1C1C1A] leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}