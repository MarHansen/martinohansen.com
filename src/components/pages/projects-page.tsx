import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import Transition from "../animation/page-transition";
import Footer from "../sections/footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../animation/scroll-reveal";
import { AnimatedTextCharacter } from "../animation/animated-text";
import ProjectCard from "../containers/project-cards";
import ReturnButton from "../buttons/return-button";

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
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        },
      },
    },
  };

  return (
    <>
      <Transition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>projects──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
        <Container>
          <>
            <ReturnButton to="/"></ReturnButton>

            <section className="h-[60vh] my-auto">
              <div className="flex gap-[2rem] font-serif font-medium md:text-[7rem] text-[5rem]">
                <AnimatedTextCharacter
                  customI={0}
                  text="Projects"
                ></AnimatedTextCharacter>
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

              <div className="flex justify-end gap-[2rem] font-serif font-medium md:text-[7rem] text-[5rem]">
                <AnimatedTextCharacter
                  customI={0}
                  text="Portofolio"
                ></AnimatedTextCharacter>
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
                backgroundImage="/porto/tunema.png"
                title="TUNEMA"
                description="Frontend ── UI/UX"
                buttonTo="/projects/TUNEMA"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/porto/serene.png"
                title="Serene"
                description="User Interface Design"
                buttonTo="/projects/Serene"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/porto/catpaws.png"
                title="CatPaws"
                description="UI/UX"
                buttonTo="/projects/CatPaws"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/porto/yutrav.png"
                title="YuTrav"
                description="UI/UX"
                buttonTo="/projects/YuTrav"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/porto/adex.png"
                title="Adex Legend"
                description="Frontend ── UI/UX"
                buttonTo="/projects/AdexLegend"
              />

              <ProjectCard
                targetRef={targetRef}
                type="right"
                backgroundImage="/porto/merci.png"
                title="Merci"
                description="Frontend ── UI/UX"
                buttonTo="/projects/Merci"
              />

              <ProjectCard
                targetRef={targetRef}
                type="left"
                backgroundImage="/porto/marhansenv1.png"
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
