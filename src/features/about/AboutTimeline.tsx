import { GlassCard } from "@/components/common";
import { FadeUp } from "@/components/common";

const timeline = [
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    description:
      "Began my journey into software development, programming fundamentals, and problem solving.",
  },
  {
    year: "2023",
    title: "Focused on Java Development",
    description:
      "Learned Java, Object-Oriented Programming, SQL, HTML, CSS, and JavaScript while strengthening programming fundamentals.",
  },
  {
    year: "2024",
    title: "Spring Boot & Real Projects",
    description:
      "Started building full-stack applications using Spring Boot, PostgreSQL, REST APIs and modern frontend technologies.",
  },
  {
    year: "2025",
    title: "Java Internship at Softpro India",
    description:
      "Worked on enterprise Java concepts, backend development practices and professional software development workflows.",
  },
  {
    year: "2026",
    title: "Building Production Applications",
    description:
      "Developing scalable applications like Testiva while continuously learning AI-assisted development and modern engineering practices.",
  },
];

export function AboutTimeline() {
  return (
    <GlassCard className="p-8">
      <h3 className="text-3xl font-bold text-white">My Journey</h3>

      <div className="mt-10 relative">
        {/* Vertical Line */}

        <div className="absolute left-[18px] top-0 h-full w-px bg-blue-500/20" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <FadeUp key={item.year} delay={index * 0.1}>
              <div className="relative flex gap-6">
                {/* Dot */}

                <div
                  className="
                    relative
                    z-10
                    mt-2
                    h-9
                    w-9
                    rounded-full
                    border
                    border-blue-400/30
                    bg-blue-500
                    shadow-[0_0_25px_rgba(59,130,246,.45)]
                  "
                />

                {/* Card */}

                <GlassCard
                  className="
                    flex-1
                    rounded-2xl
                    bg-slate-900/40
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-slate-900/70
                  "
                >
                  <span className="text-sm font-semibold tracking-wider text-blue-400">
                    {item.year}
                  </span>

                  <h4 className="mt-2 text-xl font-bold text-white">{item.title}</h4>

                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </GlassCard>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
