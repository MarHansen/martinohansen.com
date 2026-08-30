import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { markPreloaderDone } from "../../animation/use-preloader";

const MIN_DURATION = 1900;
const MAX_DURATION = 4000;

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  useEffect(() => {
    lenisRef.current?.stop?.();
    document.body.style.overflow = "hidden";

    let ready = false;
    const windowLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const fontsReady = document.fonts
      ? document.fonts.ready
      : Promise.resolve();
    Promise.all([windowLoaded, fontsReady]).then(() => {
      ready = true;
    });

    const start = performance.now();
    let raf = 0;
    let done = false;

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(100, Math.floor((elapsed / MIN_DURATION) * 100)));

      if ((ready && elapsed >= MIN_DURATION) || elapsed >= MAX_DURATION) {
        if (!done) {
          done = true;
          setProgress(100);
          setVisible(false);
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleExitComplete = () => {
    lenisRef.current?.start?.();
    document.body.style.overflow = "";
    markPreloaderDone();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-paper)] origin-top"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
        >
          <motion.span
            className="text-xl sm:text-2xl font-foot pl-[0.35em]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            marhansen
          </motion.span>

          <div className="absolute bottom-8 left-0 right-0 flex items-end justify-between px-6 sm:px-10 text-xs sm:text-sm opacity-60">
            <span className="tabular-nums">
              {String(progress).padStart(3, "0")}
            </span>
            <span>loading</span>
          </div>

          <div
            className="absolute bottom-0 left-0 h-[5px] bg-[var(--color-paper)]"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
