import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollReveal from "../animation/scroll-reveal";
import CustomButton from "../buttons/main-button";
import { useInView } from "react-intersection-observer";
import ReactCurvedText from "react-curved-text";
import "../../css/custom.css";
import { Link as ToLink } from "react-scroll";
import { Link } from "react-router-dom";

function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  //a bit bruteforce right here :')
  const scale = useTransform(scrollYProgress, [0.1, 0.17], [0.6, 1]);
  const scale2 = useTransform(scrollYProgress, [0.18, 0.28], [0.5, 1]);
  const scale3 = useTransform(scrollYProgress, [0.35, 0.45], [0.7, 1]);
  const scale4 = useTransform(scrollYProgress, [0.4, 0.57], [0.6, 1]);
  const scale5 = useTransform(scrollYProgress, [0.47, 0.7], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="projects" className="max-w-none px-0 mt-10 lg:mb-10 mb-5">
      <div className="flex overflow-clip mb-40 md:flex-row flex-col justify-between items-center font-serif text-[5rem] lg:text-[11rem] font-medium sticky top-10">
        <ScrollReveal distance={50} delay={0.3}>
          <h1 className="md:mt-0 mt-[3rem]">Projects</h1>
          <motion.div
            ref={ref}
            initial={{ width: 0, left: 0 }}
            animate={{ width: inView ? "100%" : 0, left: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-black"
          />
          <p className="text-[2rem] font-normal">01</p>
        </ScrollReveal>
        <motion.div
          className="text-[1.2rem] mt-10 mb-10 font-serif font-normal"
          style={{
            rotate: rotate,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {" "}
          <ScrollReveal distance={70} delay={0.7}>
            <svg width={300} height={300}>
              <svg
                x={105}
                y={105}
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="45" cy="45" r="45" fill="#2B2724" />
                <path
                  d="M42.4965 4C39.4723 6.81782 37.0467 10.2159 35.3643 13.9914C33.682 17.767 32.7774 21.8427 32.7044 25.9755C32.6315 30.1082 33.3918 34.2133 34.9399 38.0458C36.488 41.8784 38.7923 45.3599 41.7151 48.2826C44.638 51.2054 48.1197 53.5095 51.9525 55.0575C55.7852 56.6056 59.8905 57.3658 64.0235 57.2929C68.1564 57.22 72.2323 56.3154 76.0081 54.6331C79.7838 52.9509 83.182 50.5254 86 47.5013C85.3574 57.9259 80.7626 67.7128 73.1524 74.8665C65.5423 82.0202 55.49 86.002 45.0452 86C22.3741 86 4 67.6269 4 44.961C4 23.1488 21.0156 5.31325 42.4965 4Z"
                  fill="#EDE8E2"
                />
              </svg>

              <ReactCurvedText
                width={300}
                height={300}
                cx={150}
                cy={150}
                rx={110}
                ry={110}
                startOffset={10}
                reversed={true}
                text="Est 2022•Est 2022•Est 2022•Est 2022•Est 2022•Est 2022•Est 2022•Est 2022•Est 2022"
                textProps={{ style: { letterSpacing: 3 } }}
              />
            </svg>
          </ScrollReveal>
        </motion.div>
      </div>
      <div
        ref={targetRef}
        className="relative mb-5 grid sm:grid-cols-2 grid-cols-1 grid-rows-auto gap-x-4 gap-y-4 auto-rows-[auto,auto]"
      >
        <motion.a
          data-cursor-size="80px"
          data-cursor-exclusion
          style={{
            scale: scale,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="group relative inline-block max-w-full sm:w-auto w-full sm:max-w-[518px] self-start py-5 bg-[#9CB719] text-[#ffff]"
        >
          <Link
            to="/projects/TUNEMA"
            className="relative max-w-full sm:w-auto w-full sm:max-w-[518px]"
          >
            <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
              TUNEMA
            </h1>
            <p className="font-body text-[1rem] text-center py-5">
              A platform to share and find music samples.
            </p>
            <img
              className="absolute group-hover:opacity-0 transition-opacity duration-700 z-10"
              src="/porto/tunema2.webp"
              alt=""
            />
            <img src="/porto/tunema.webp" alt="" />
            <p className="font-body text-[1rem] text-center pt-5">
              Frontend ── UI/UX
            </p>
          </Link>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-exclusion
          style={{
            scale: scale2,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          // href="https://www.behance.net/gallery/171659489/Serene"
          // target="_blank"
          className="group relative sm:mt-52 mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[594px] py-5 bg-[#14213D] text-[#ffff]"
        >
          <Link
            to="/projects/Serene"
            className="relative max-w-full sm:w-auto w-full sm:max-w-[594px]"
          >
            <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
              Serene
            </h1>
            <p className="font-body text-[1rem] text-center py-5">
              Journaling application for mental health issues.
            </p>

            <img
              className="absolute  group-hover:opacity-0 transition-opacity duration-700 object-cover w-fit z-40"
              src="/porto/serene2.webp"
              alt=""
            />
            <img
              className="relative transition-opacity duration-700 object-cover w-fit"
              src="/porto/serene.webp"
              alt=""
            />

            <p className="font-body text-[1rem] text-center pt-5">
              UI Designer
            </p>
          </Link>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-exclusion
          style={{
            scale: scale3,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          // href="https://medium.com/@marhansen/catpaws-34cb48c56f28"
          // target="_blank"
          className="group mt-2 items-center sm:mt-20 xl:ml-60 ml-0 inline-block max-w-full sm:w-auto w-full sm:max-w-[518px] self-start py-5 bg-[#FDA632] text-[#ffff]"
        >
          <Link
            to="/projects/CatPaws"
            className="relative max-w-full sm:w-auto w-full sm:max-w-[518px]"
          >
            <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
              CatPaws
            </h1>
            <p className="font-body text-[1rem] text-center py-5">
              Stray animal rescue application.
            </p>
            <img
              src="/porto/catpaws.webp"
              className="object-cover sm:w-[700px] sm:h-[200px] self-center justify-self-center"
              alt=""
            />
            <p className="font-body text-[1rem] text-center pt-5">UI/UX</p>
          </Link>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-exclusion
          style={{
            scale: scale4,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          // href="https://www.behance.net/gallery/150326813/YuTrav"
          // target="_blank"
          className="group relative sm:mt-96 justify-self-end mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[494px] py-5 bg-[#232C31] text-[#ffff]"
        >
          <Link
            to="/projects/YuTrav"
            className="relative max-w-full sm:w-auto w-full sm:max-w-[494px]"
          >
            <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
              YuTrav
            </h1>
            <p className="font-body text-[1rem] text-center py-5">
              Virtual travel application.
            </p>
            <img
              className="absolute group-hover:opacity-0 transition-opacity duration-700 object-cover w-fit xl:max-w-[494px] z-10"
              src="/porto/yutrav.webp"
              alt=""
            />
            <img src="/porto/yutrav2.webp" alt="" />
            <p className="font-body text-[1rem] text-center pt-5">UI/UX</p>
          </Link>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-exclusion
          style={{
            scale: scale5,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          // href="https://www.behance.net/gallery/166045673/Adex-Legends"
          // target="_blank"
          className="group sm:-mt-32 mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[494px] py-5 bg-[#F5F5F7]"
        >
          <Link
            to="/projects/AdexLegend"
            className="group relative sm:-mt-32 mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[494px] py-5 bg-[#F5F5F7]"
          >
            <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
              Adex Legend
            </h1>
            <p className="font-body text-[1rem] text-center py-5">
              Human Computer Interaction final project.
            </p>
            <img src="/porto/adex.webp" alt="" />
            <p className="font-body text-[1rem] text-center pt-5">
              Frontend ── UI/UX
            </p>
          </Link>
        </motion.a>
      </div>

      <div className="w-fit sm:ml-auto sm:mr-0 mr-auto ml-auto my-10">
        <ScrollReveal delay={0.1}>
          <CustomButton to="/projects">More Projects</CustomButton>
        </ScrollReveal>
      </div>

      <ToLink
        spy={true}
        smooth={true}
        duration={500}
        to="about"
        data-cursor-size="60px"
        data-cursor-stick="#stick-item"
        data-cursor-exclusion
        className="mt-[5rem] arrow flex w-fit mx-auto flex-col items-center cursor-pointe font-foot text-[1.3rem] font-medium"
      >
        <ScrollReveal delay={0.2}>
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
          <p>About Me</p>
        </ScrollReveal>
      </ToLink>
    </section>
  );
}

export default Projects;
