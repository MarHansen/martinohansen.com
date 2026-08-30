import { motion } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

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
  start = true,
  className = "",
  fitWidth = false,
  fitScale = 1,
}: {
  text: string;
  customI: number;
  staggerChildren?: number;
  start?: boolean;
  className?: string;
  fitWidth?: boolean;
  fitScale?: number;
}) => {
  const letters = Array.from(text);
  const ref = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<string | undefined>(undefined);

  const fit = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const BASE = 100;
    el.style.fontSize = `${BASE}px`;
    const contentW = Array.from(el.children).reduce(
      (sum, node) => sum + (node as HTMLElement).getBoundingClientRect().width,
      0,
    );
    const targetW = el.getBoundingClientRect().width;
    if (contentW > 0 && targetW > 0) {
      const next = (BASE * targetW * fitScale) / contentW;
      el.style.fontSize = `${next}px`;
      setFontSize((prev) => {
        const prevPx = prev ? parseFloat(prev) : 0;
        return Math.abs(prevPx - next) < 0.5 ? prev : `${next}px`;
      });
    }
  }, [fitScale]);

  useLayoutEffect(() => {
    if (!fitWidth) return;
    const el = ref.current;
    if (!el) return;

    fit();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(fit);
    }

    const ro = new ResizeObserver(fit);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [fitWidth, fit, text]);

  const container = {
    hidden: { opacity: 1 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: 0.35 * customI },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        overflow: "hidden",
        display: "flex",
        whiteSpace: "nowrap",
        ...(fitWidth ? { fontSize, lineHeight: 0.85 } : null),
      }}
      variants={container}
      initial="hidden"
      animate={start ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { AnimatedTextCharacter };
