import { motion } from "framer-motion";

const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
    },
  },
  hidden: {
    opacity: 1,
    y: 900,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
    },
  },
};

const AnimatedTextCharacter = ({
  text,
  customI,
  staggerChildren = 0.05,
}: {
  text: string;
  customI: number;
  staggerChildren?: number;
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: 0.35 * customI },
    }),
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { AnimatedTextCharacter };
