import { cva } from "class-variance-authority";

export const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      none: "",
      sm: "py-16",
      md: "py-24",
      lg: "py-32",
      xl: "py-40",
    },

    background: {
      transparent: "bg-transparent",
      surface: "bg-slate-900/50",
    },
  },

  defaultVariants: {
    spacing: "lg",
    background: "transparent",
  },
});
