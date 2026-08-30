import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { REVEAL_EASE } from "../../animation/variants";

interface ScrollRevealProps {
  threshold?: number;
  distance?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  threshold = 0.5,
  distance = 40,
  delay = 0,
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.6, delay, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
