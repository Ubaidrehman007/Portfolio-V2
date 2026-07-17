import { FadeUp, GlassCard } from "@/components/common";
import { CONTACT_INFO } from "./constants/contact";

export function ContactCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {CONTACT_INFO.map((item, index) => {
        const Card = (
          <FadeUp delay={index * 0.1}>
            <GlassCard
              className="
                h-full
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:bg-white/10
              "
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-2 break-all text-slate-400">{item.value}</p>
            </GlassCard>
          </FadeUp>
        );

        if (item.href === "#") {
          return <div key={item.title}>{Card}</div>;
        }

        return (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {Card}
          </a>
        );
      })}
    </div>
  );
}
