import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
// import { Helmet } from "react-helmet";
import Transition from "../animation/page-transition";
import Footer from "../sections/footer";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import ScrollReveal from "../animation/scroll-reveal";
import { AnimatedTextCharacter } from "../animation/animated-text";
import ReturnButton from "../buttons/return-button";
import ProjectCard from "../containers/project-cards";
import HeadHelmet from "../head-helmet";

function ProjectsPage() {
  const targetRef = useRef<HTMLDivElement>(null);

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const textVariants = {
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <Transition>
        <HeadHelmet title="projects──marhansen"></HeadHelmet>
        <Container>
          <>
            <ReturnButton></ReturnButton>

            <section className="my-auto mb-[5rem]">
              <div className="flex flex-col gap-[2rem] font-light md:text-[6rem] text-[5rem] overflow-hidden">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                  className="-mb-[60px] overflow-hidden"
                >
                  Featured
                </motion.h1>
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                  className="flex gap-5 items-center"
                >
                  <motion.svg
                    style={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[6.5%] min-w-[70px]"
                  >
                    <circle cx="12" cy="12" r="12" fill="#2B2724" />
                    <path
                      d="M11.3283 1C10.517 1.756 9.86619 2.66767 9.41482 3.68063C8.96346 4.69358 8.72076 5.78707 8.70119 6.89585C8.68163 8.00464 8.88561 9.10601 9.30095 10.1343C9.71630 11.1625 10.3345 12.0966 11.1187 12.8807C11.9029 13.6649 12.8370 14.2830 13.8653 14.6984C14.8936 15.1137 15.9950 15.3177 17.1039 15.2981C18.2127 15.2785 19.3062 15.0358 20.3192 14.5845C21.3322 14.1332 22.2440 13.4824 23.0000 12.6711C22.8276 15.4679 21.5948 18.0937 19.5531 20.013C17.5114 21.9323 14.8144 23.0005 12.0121 23.0000C5.92963 23.0000 1 18.0706 1 11.9895C1 6.13748 5.56516 1.35233 11.3283 1Z"
                      fill="#EDE8E2"
                    />
                  </motion.svg>
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    className="italic"
                  >
                    Projects
                  </motion.h1>
                </motion.div>
              </div>

              <div
                data-cursor-size="100px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
                className="relative overflow-hidden flex flex-col my-10"
              >
                <motion.div
                  initial={{ width: 0, left: 0 }}
                  animate={{ width: "100%", left: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-0 h-[1px] bg-black"
                />
                <motion.div
                  variants={marqueeVariants}
                  animate="animate"
                  className="m-auto my-5 font-serif text-[2rem] lg:text-[2rem]"
                >
                  <AnimatedTextCharacter
                    staggerChildren={0.015}
                    customI={0}
                    text="MyWorks ── Projects ── Portofolio ── Est2022. ── PersonalProjects ── MyWorks ── Projects ── Portofolio ── Est2022. ── PersonalProjects ── MyWorks ── Projects ── Portofolio ── Est2022. ── PersonalProjects ── MyWorks ── Projects ── Portofolio ── Est2022. ── PersonalProjects ── MyWorks ── Projects ── Portofolio ── Est2022. ── PersonalProjects ── MyWorks ── Projects"
                  ></AnimatedTextCharacter>
                </motion.div>
                <motion.div
                  initial={{ width: 0, right: 0 }}
                  animate={{ width: "100%", right: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 h-[1px] bg-black"
                />
              </div>
            </section>

            <ScrollReveal>
              <section className="my-10 flex font-body text-[1.5rem] justify-between">
                <p>My works</p>
                <div className="flex items-center justify-center gap-[4rem]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3,
                      ease: [0.165, 0.84, 0.44, 1],
                    }}
                    className="border-t w-[10rem] border-black my-4"
                    style={{ transformOrigin: "left" }}
                  ></motion.div>
                  <p>02</p>
                </div>
              </section>
            </ScrollReveal>

            <section
              ref={targetRef}
              className="relative mb-5 grid sm:grid-cols-2 grid-cols-1 grid-rows-auto lg:gap-x-[12rem] gap-x-5 gap-y-10 auto-rows-[auto,auto]"
            >
              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/showcase/tunema/tunema-1.webp"
                title="TUNEMA"
                description="Frontend ── UI/UX"
                buttonTo="/projects/TUNEMA"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/showcase/serene/serene-1.webp"
                title="Serene"
                description="User Interface Design"
                buttonTo="/projects/Serene"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/porto/catpaws.webp"
                title="CatPaws"
                description="UI/UX"
                buttonTo="/projects/CatPaws"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/showcase/yutrav/yutrav-4.webp"
                title="YuTrav"
                description="UI/UX"
                buttonTo="/projects/YuTrav"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/showcase/adex/adex-1.webp"
                title="Adex Legend"
                description="Frontend ── UI/UX"
                buttonTo="/projects/AdexLegend"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/porto/merci.webp"
                title="Merci"
                description="Frontend ── UI/UX"
                buttonTo="/projects/Merci"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/porto/marhansenv1.webp"
                title="marhansen ── Early Version"
                description="Frontend ── UI/UX"
                buttonTo="/projects/marhansen"
              />
            </section>

            <Footer></Footer>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default ProjectsPage;
