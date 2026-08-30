import type { Variants } from "framer-motion";

export const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
export const REVEAL_DURATION = 0.6;
export const REVEAL_DISTANCE = 40;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
