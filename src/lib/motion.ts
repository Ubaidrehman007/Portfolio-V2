import type { Variants } from "framer-motion";
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};
export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 50,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const floatingAnimation = {
  y: [0, -12, 0] as number[],

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const glowAnimation = {
  opacity: [0.2, 0.35, 0.2] as number[],

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
