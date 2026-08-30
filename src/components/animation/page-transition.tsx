import React, { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useLocation, useNavigationType } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";
import "../../css/custom.css";

interface TransitionProps {
  children: ReactNode;
}

const scrollPositions = new Map<string, number>();

const MAX_REVEAL_HOLD_MS = 250;

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const lenis = useLenis();

  const keyRef = useRef(pathname);
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  const reveal = useAnimationControls();

  useLayoutEffect(() => {
    const saved = scrollPositions.get(keyRef.current);
    const target = navigationType === "POP" && saved != null ? saved : 0;

    const apply = () => {
      const l = lenisRef.current;
      if (l && typeof l.scrollTo === "function") {
        l.scrollTo(target, { immediate: true, force: true });
      } else {
        window.scrollTo(0, target);
      }
    };

    const retract = () => {
      lenisRef.current?.start?.();
      reveal.start({
        scaleY: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      });
    };

    lenisRef.current?.stop?.();
    apply();

    let raf = 0;
    let released = false;
    const startedAt = performance.now();

    const tick = () => {
      apply();
      const settled = Math.abs(window.scrollY - target) <= 2;
      if (settled || performance.now() - startedAt >= MAX_REVEAL_HOLD_MS) {
        released = true;
        retract();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (!released) lenisRef.current?.start?.();
    };
  }, []);

  useEffect(() => {
    return () => {
      const l = lenisRef.current;
      const y = l && typeof l.scroll === "number" ? l.scroll : window.scrollY;
      scrollPositions.set(keyRef.current, y);
    };
  }, []);

  return (
    <>
      {children}
      {/* transition logic from codegrid */}
      <motion.div
        className="slide-in fixed z-[500] top-0 left-0 w-full h-screen bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed z-[500] top-0 left-0 w-full h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={reveal}
        exit={{ scaleY: 0 }}
      />
    </>
  );
};

export default Transition;
