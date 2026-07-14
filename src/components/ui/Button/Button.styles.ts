import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-[12px]",
    "font-semibold",
    "transition-all",
    "duration-300",
    "outline-none",
    "select-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[#030712]",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-600",
          "text-white",
          "shadow-lg",
          "hover:bg-blue-500",
          "hover:shadow-[0_0_35px_rgba(59,130,246,.45)]",
          "hover:-translate-y-1",
        ],

        secondary: [
          "border",
          "border-white/10",
          "bg-white/5",
          "text-white",
          "hover:bg-white/10",
          "hover:border-blue-500/40",
          "hover:-translate-y-1",
        ],

        ghost: ["bg-transparent", "text-slate-300", "hover:bg-white/5"],
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-5 text-base",

        lg: "h-14 px-6 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
