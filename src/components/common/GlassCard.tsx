import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/20
        hover:shadow-[0_20px_60px_rgba(37,99,235,.10)]
      `,
        className,
      )}
    >
      {children}
    </div>
  );
}
