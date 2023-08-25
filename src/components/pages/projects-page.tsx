import Container from "../container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import Transition from "../../page-transition";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../scroll-reveal";
import SecondaryButton from "../secondary-button";
import { AnimatedTextCharacter } from "../animated-text";

function ProjectsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], [-10, 50]);

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
            <div className="mt-24">
              <motion.div
                className="w-fit"
                whileHover={{ x: 25 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  data-cursor-size="80px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  to="/"
                  className="group my-10 w-fit flex items-center gap-7 font-foot font-medium text-[3rem]"
                >
                  <svg
                    width="53"
                    height="38"
                    viewBox="0 0 53 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.21 37L0.999999 19L19.21 0.999999M52 19L1.51 19"
                      stroke="#2B2724"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="duration-200 relative mt-auto mb-auto w-fit text-black group-hover:text-black group-hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-black">
                    Return
                  </p>
                </Link>
              </motion.div>
            </div>

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

            {/* This section is still a messy code will fix it later */}
            <section
              ref={targetRef}
              className="relative mb-5 grid sm:grid-cols-2 grid-cols-1 grid-rows-auto lg:gap-x-[12rem] gap-x-5 gap-y-10 auto-rows-[auto,auto]"
            >
              <div className="max-w-full">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/tunema.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">Tunema</h3>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/TUNEMA"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full sm:mt-36 mt-0">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/serene.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">Serene</h3>
                      <p>User Interface Design</p>
                    </div>
                    <SecondaryButton to="/projects/serene"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/catpaws.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">CatPaws</h3>
                      <p>UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/catpaws"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full sm:mt-36 mt-0">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/yutrav.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">YuTrav</h3>
                      <p>UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/yutrav"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/adex.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">Adex Legend</h3>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/adexlegend"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full sm:mt-36 mt-0">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/merci.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">Merci</h3>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/merci"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>

              <div className="max-w-full">
                <ScrollReveal>
                  <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
                    <motion.div
                      style={{
                        y: yScroll,
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="img-wrap w-full h-[30rem] bg-[url('/porto/marhansenv1.png')] bg-cover bg-center"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center w-auto mt-2">
                    <div className="flex flex-col font-body">
                      <h3 className="text-[2rem]">
                        marhansen ── Early Version
                      </h3>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <SecondaryButton to="/projects/marhansenv1"></SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            <Footer></Footer>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default ProjectsPage;
