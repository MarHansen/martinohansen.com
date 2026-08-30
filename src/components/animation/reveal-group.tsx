import React from "react";
import { motion } from "framer-motion";
import { revealUp, staggerContainer } from "../../animation/variants";

interface RevealGroupProps {
  className?: string;
  amount?: number;
  children: React.ReactNode;
}

export const RevealGroup: React.FC<RevealGroupProps> = ({
  className,
  amount = 0.2,
  children,
}) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
  >
    {children}
  </motion.div>
);

interface RevealItemProps {
  className?: string;
  children: React.ReactNode;
}

export const RevealItem: React.FC<RevealItemProps> = ({
  className,
  children,
}) => (
  <motion.div className={className} variants={revealUp}>
    {children}
  </motion.div>
);
