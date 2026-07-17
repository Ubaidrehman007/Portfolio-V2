import { FadeUp, GlassCard } from "@/components/common";
import { TECH_STACK } from "./constants/skills";

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <GlassCard className="p-6">
      <h3 className="mb-6 text-2xl font-bold text-white">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-300
              transition-all
              duration-300
              hover:scale-105
              hover:border-blue-400
              hover:bg-blue-500/20
            "
          >
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export function TechGrid() {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      <FadeUp delay={0.1}>
        <SkillCategory title="Backend" items={TECH_STACK.backend} />
      </FadeUp>

      <FadeUp delay={0.2}>
        <SkillCategory title="Frontend" items={TECH_STACK.frontend} />
      </FadeUp>

      <FadeUp delay={0.3}>
        <SkillCategory title="Tools" items={TECH_STACK.tools} />
      </FadeUp>
    </div>
  );
}
