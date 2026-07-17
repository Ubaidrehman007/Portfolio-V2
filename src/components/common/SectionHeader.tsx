import type { ReactNode } from "react";
import { SectionBadge } from "./SectionBadge";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionBadge>{badge}</SectionBadge>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-white
          sm:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        {description}
      </p>
    </div>
  );
}
