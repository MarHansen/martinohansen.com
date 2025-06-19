import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  threshold?: number;
  distance?: number;
  delay?: number;
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  threshold = 0.5,
  distance = 40,
  delay = 0,
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : distance }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
