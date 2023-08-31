import { AnimatedTextCharacter } from "../animation/animated-text";
import Container from "../containers/container";
import ScrollReveal from "../animation/scroll-reveal";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as ToLink } from "react-scroll";

function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="flex h-screen flex-col justify-between overflow-visible">
        <div className="flex flex-col">
          <div
            data-cursor-size="250px"
            data-cursor-stick="#stick-item"
            data-cursor-exclusion
            className="sm:mt-[60px] mt-[100px] overflow-visible md:flex-row gap-[2rem] flex-col flex items-center justify-center font-serif font-medium md:text-[11vw] text-[20vw]"
          >
            <AnimatedTextCharacter
              customI={1}
              text="MARTINO"
            ></AnimatedTextCharacter>

            <AnimatedTextCharacter
              customI={2}
              text="HANSEN"
            ></AnimatedTextCharacter>
          </div>
          <Container>
            <div className="flex justify-center items-center gap-5">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="border-t w-1/2 border-black my-4"
                style={{ transformOrigin: "right" }}
              ></motion.div>

              <ScrollReveal delay={0.2}>
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
                  <circle cx="12" cy="12" r="12" fill="#2B2724" />
                  <path
                    d="M11.3283 1C10.517 1.756 9.86619 2.66767 9.41482 3.68063C8.96346 4.69358 8.72076 5.78707 8.70119 6.89585C8.68163 8.00464 8.88561 9.10601 9.30095 10.1343C9.7163 11.1625 10.3345 12.0966 11.1187 12.8807C11.9029 13.6649 12.837 14.283 13.8653 14.6984C14.8936 15.1137 15.995 15.3177 17.1039 15.2981C18.2127 15.2785 19.3062 15.0358 20.3192 14.5845C21.3322 14.1332 22.244 13.4824 23 12.6711C22.8276 15.4679 21.5948 18.0937 19.5531 20.013C17.5114 21.9323 14.8144 23.0005 12.0121 23C5.92963 23 1 18.0706 1 11.9895C1 6.13748 5.56516 1.35233 11.3283 1Z"
                    fill="#EDE8E2"
                  />
                </motion.svg>
              </ScrollReveal>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.3,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="border-t lg w-1/2 border-black my-4"
                style={{ transformOrigin: "left" }}
              ></motion.div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mb-[60px] grid grid-cols-3 gap-[1rem] auto-cols-max justify-items-between font-body md:text-[1.2rem] text-[1rem] text-center">
            <span className="justify-self-start">
              <ScrollReveal delay={isMobile ? 0.1 : 2.1}>
                UI/UX Designer ── Web Developer
              </ScrollReveal>
            </span>
            <ToLink
              spy={true}
              smooth={true}
              duration={500}
              data-cursor-size="100px"
              data-cursor-stick="#stick-item"
              data-cursor-exclusion
              to="projects"
              className="arrow flex w-fit mx-auto flex-col items-center cursor-pointe font-foot text-[1.3rem] font-medium"
            >
              <ScrollReveal delay={isMobile ? 0.3 : 2.5}>
                <svg
                  className="mx-auto"
                  width="38"
                  height="53"
                  viewBox="0 0 38 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 33.79L19 52L1 33.79M19 1V51.49"
                    stroke="#2B2724"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Projects</p>
              </ScrollReveal>
            </ToLink>
            <span className="justify-self-end">
              <ScrollReveal delay={isMobile ? 0.2 : 2.3}>
                Based in Jakarta, Indonesia.
              </ScrollReveal>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Landing;
