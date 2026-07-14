const stats = ["Java", "Spring Boot", "React", "AI Assisted Development"];

export function HeroStats() {
  return (
    <div
      className="
        mt-12
        flex
        flex-wrap
        gap-4
        justify-center
        lg:justify-start
      "
    >
      {stats.map((tech) => (
        <div
          key={tech}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-sm
            font-medium
            text-slate-300
            transition-all
            duration-300
            hover:border-blue-500/30
            hover:bg-blue-500/10
          "
        >
          ✓ {tech}
        </div>
      ))}
    </div>
  );
}
