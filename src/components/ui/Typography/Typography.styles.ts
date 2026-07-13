import { cva } from "class-variance-authority";

export const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      display: "text-5xl md:text-7xl",
      h1: "text-4xl md:text-6xl",
      h2: "text-3xl md:text-5xl",
      h3: "text-2xl md:text-3xl",
    },
  },

  defaultVariants: {
    size: "h1",
  },
});

export const textVariants = cva("leading-relaxed", {
  variants: {
    variant: {
      default: "text-white",
      muted: "text-slate-400",
      accent: "text-blue-400",
    },

    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
