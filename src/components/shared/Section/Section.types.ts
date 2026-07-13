import type { HTMLAttributes, ReactNode } from "react";

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export type SectionBackground = "transparent" | "surface";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  spacing?: SectionSpacing;

  background?: SectionBackground;

  container?: boolean;
}
