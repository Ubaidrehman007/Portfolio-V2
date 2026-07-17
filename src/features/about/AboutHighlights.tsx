import { GlassCard } from "@/components/common";

const highlights = [
  {
    title: "Backend Development",
    description: "Building scalable backend systems using Java, Spring Boot and REST APIs.",
  },
  {
    title: "Frontend Development",
    description: "Creating responsive interfaces using React, TypeScript and Tailwind CSS.",
  },
  {
    title: "Database Design",
    description: "Experience with PostgreSQL, MySQL and efficient relational database design.",
  },
  {
    title: "Problem Solving",
    description: "Passionate about writing clean, maintainable and scalable solutions.",
  },
  {
    title: "Continuous Learning",
    description:
      "Always exploring AI-assisted development, modern tools and software engineering best practices.",
  },
  {
    title: "Team Collaboration",
    description: "Comfortable working with Git, GitHub and collaborative development workflows.",
  },
];

export function AboutHighlights() {
  return (
    <GlassCard className="p-8">
      <h3 className="text-3xl font-bold text-white">What I Bring</h3>

      <div className="mt-10 grid gap-5">
        {highlights.map((item) => (
          <GlassCard
            key={item.title}
            className="
              rounded-2xl
              bg-slate-900/40
              p-5
              hover:bg-slate-900/70
            "
          >
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>

            <p className="mt-2 leading-7 text-slate-400">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </GlassCard>
  );
}
