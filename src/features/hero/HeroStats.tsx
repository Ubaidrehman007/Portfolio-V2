const stats = ["Java", "Spring Boot", "React", "AI Assisted Development"];

export function HeroStats() {
  return (
    <div
      className="
        mt-12
        flex
        flex-wrap
        justify-center
        gap-4
        lg:justify-start
      "
    >
      {stats.map((item) => (
        <div
          key={item}
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
          "
        >
          ✓ {item}
        </div>
      ))}
    </div>
  );
}
