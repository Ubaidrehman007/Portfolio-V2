import type { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-sm
        font-medium
        tracking-wide
        text-blue-400
      "
    >
      {children}
    </span>
  );
}
