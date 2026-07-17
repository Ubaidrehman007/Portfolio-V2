import { FadeUp, GlassCard } from "@/components/common";
import { EXPERTISE } from "./constants/skills";

export function ExpertiseCards() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      {EXPERTISE.map((item, index) => (
        <FadeUp key={item.title} delay={index * 0.1}>
          <GlassCard
            className="
              h-full
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/30
            "
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>

            <p className="mt-4 leading-8 text-slate-400">{item.description}</p>
          </GlassCard>
        </FadeUp>
      ))}
    </div>
  );
}
