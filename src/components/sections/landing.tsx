import { AnimatedTextCharacter } from "../animation/animated-text";
import Container from "../containers/container";
import ScrollReveal from "../animation/scroll-reveal";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePreloaderDone } from "../../animation/use-preloader";

const imageUrl = "/about/profile-pic.webp";

function Landing() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverArmed, setHoverArmed] = useState(false);
  const ready = usePreloaderDone();

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setHoverArmed(true), 2600);
    return () => clearTimeout(t);
  }, [ready]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const followX = useSpring(pointerX, { stiffness: 350, damping: 28, mass: 0.3 });
  const followY = useSpring(pointerY, { stiffness: 350, damping: 28, mass: 0.3 });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left - rect.width / 2) * 0.45);
    pointerY.set((e.clientY - rect.top - rect.height / 2) * 0.45);
  };

  const resetPointer = () => {
    setHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  const debouncedCheckWindowSize = useDebouncedCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, 250);

  useEffect(() => {
    debouncedCheckWindowSize();

    window.addEventListener("resize", debouncedCheckWindowSize);
    return () => {
      window.removeEventListener("resize", debouncedCheckWindowSize);
    };
  }, [debouncedCheckWindowSize]);

  return (
    <>
      <section className="relative flex h-screen flex-col overflow-visible">
        <div className="flex h-full items-center">
          <Container>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseMove={handlePointerMove}
              onMouseLeave={resetPointer}
              className="relative isolate overflow-visible flex flex-col items-stretch font-serif font-medium leading-none md:text-[10vw] text-[16vw]"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                <motion.div style={{ x: followX, y: followY }}>
                  <motion.img
                    src={imageUrl}
                    alt="Martino Hansen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoverArmed && hovered ? 0.12 : 0 }}
                    transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                    className="w-[60vw] max-w-[440px] rounded-md object-cover md:w-[32vw]"
                  />
                </motion.div>
              </div>

              <AnimatedTextCharacter
                customI={1}
                text="MARTINO"
                start={ready}
                fitWidth
                fitScale={0.8}
                className="relative z-10 w-full justify-center"
              ></AnimatedTextCharacter>

              <div className="relative z-10 mx-auto flex w-4/5 items-center justify-center gap-5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="border-t w-1/2 border-black my-4"
                  style={{ transformOrigin: "right" }}
                ></motion.div>

                <ScrollReveal delay={0.2} active={ready}>
                  <motion.svg
                    style={{ rotate: "0deg" }} // Initial rotation angle
                    animate={{ rotate: "360deg" }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" className="fill-black" />
                    <path
                      d="M11.3283 1C10.517 1.756 9.86619 2.66767 9.41482 3.68063C8.96346 4.69358 8.72076 5.78707 8.70119 6.89585C8.68163 8.00464 8.88561 9.10601 9.30095 10.1343C9.7163 11.1625 10.3345 12.0966 11.1187 12.8807C11.9029 13.6649 12.837 14.283 13.8653 14.6984C14.8936 15.1137 15.995 15.3177 17.1039 15.2981C18.2127 15.2785 19.3062 15.0358 20.3192 14.5845C21.3322 14.1332 22.244 13.4824 23 12.6711C22.8276 15.4679 21.5948 18.0937 19.5531 20.013C17.5114 21.9323 14.8144 23.0005 12.0121 23C5.92963 23 1 18.0706 1 11.9895C1 6.13748 5.56516 1.35233 11.3283 1Z"
                      className="fill-white"
                    />
                  </motion.svg>
                </ScrollReveal>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="border-t lg w-1/2 border-black my-4"
                  style={{ transformOrigin: "left" }}
                ></motion.div>
              </div>

              <AnimatedTextCharacter
                customI={2}
                text="HANSEN"
                start={ready}
                fitWidth
                fitScale={0.8}
                className="relative z-10 w-full justify-center"
              ></AnimatedTextCharacter>
            </div>
          </Container>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Container>
            <div className="mb-[60px] grid grid-cols-2 gap-[1rem] auto-cols-max justify-items-between font-body md:text-[1.2rem] text-[1rem] text-center">
            <span className="justify-self-start">
              <ScrollReveal delay={isMobile ? 0.1 : 2.1} active={ready}>
                UI/UX Designer ── Web Developer
              </ScrollReveal>
            </span>
            <span className="justify-self-end">
              <ScrollReveal delay={isMobile ? 0.2 : 2.3} active={ready}>
                Based in Jakarta, Indonesia.
              </ScrollReveal>
            </span>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Landing;
