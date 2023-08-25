import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollReveal from "../scroll-reveal";
import CustomButton from "../main-button";
import { useInView } from "react-intersection-observer";

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

  return (
    <section id="projects" className="max-w-none px-0 mt-10 lg:mb-10 mb-5">
      <div className="flex mb-40 md:flex-row flex-col justify-between items-center font-serif text-[5rem] lg:text-[11rem] font-medium sticky top-10">
        <ScrollReveal distance={50} delay={0.3}>
          <h1>Projects</h1>
          <motion.div
            ref={ref}
            initial={{ width: 0, left: 0 }}
            animate={{ width: inView ? "100%" : 0, left: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-black"
          />
          <p className="text-[2rem] font-normal">01</p>
        </ScrollReveal>
        <div className="text-[5rem]">
          {" "}
          <ScrollReveal distance={70} delay={0.7}>
            Est 2022
          </ScrollReveal>
        </div>
      </div>
      <div
        ref={targetRef}
        className="relative mb-5 grid sm:grid-cols-2 grid-cols-1 grid-rows-auto gap-x-4 gap-y-4 auto-rows-[auto,auto]"
      >
        <motion.a
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          style={{
            scale: scale,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          href="https://www.behance.net/gallery/171910903/TUNEMA"
          target="_blank"
          className="group relative inline-block max-w-full sm:w-auto w-full sm:max-w-[518px] self-start py-5 bg-[#9CB719] text-[#ffff]"
        >
          <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
            TUNEMA
          </h1>
          <p className="font-body text-[1rem] text-center py-5">
            A platform to share and find music samples.
          </p>
          <img
            className="absolute group-hover:opacity-0 transition-opacity duration-700"
            src="/porto/tunema2.png"
            alt=""
          />
          <img src="/porto/tunema.png" alt="" />
          <p className="font-body text-[1rem] text-center pt-5">
            Frontend ── UI/UX
          </p>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          style={{
            scale: scale2,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          href="https://www.behance.net/gallery/171659489/Serene"
          target="_blank"
          className="group relative sm:mt-52 mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[594px] py-5 bg-[#14213D] text-[#ffff]"
        >
          <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
            Serene
          </h1>
          <p className="font-body text-[1rem] text-center py-5">
            Journaling application for mental health issues.
          </p>
          <img
            className="absolute group-hover:opacity-0 transition-opacity duration-700 object-cover w-fit"
            src="/porto/serene2.gif"
            alt=""
          />
          <img src="/porto/serene.png" alt="" />
          <p className="font-body text-[1rem] text-center pt-5">UI Designer</p>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          style={{
            scale: scale3,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          href="https://medium.com/@marhansen/catpaws-34cb48c56f28"
          target="_blank"
          className="group mt-2 items-center sm:mt-20 xl:ml-60 ml-0 inline-block max-w-full sm:w-auto w-full sm:max-w-[518px] self-start py-5 bg-[#FDA632] text-[#ffff]"
        >
          <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
            CatPaws
          </h1>
          <p className="font-body text-[1rem] text-center py-5">
            Stray animal rescue application.
          </p>
          <img
            src="/porto/catpaws.png"
            className="object-cover sm:w-[700px] sm:h-[200px] self-center justify-self-center"
            alt=""
          />
          <p className="font-body text-[1rem] text-center pt-5">UI/UX</p>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          style={{
            scale: scale4,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          href="https://www.behance.net/gallery/150326813/YuTrav"
          target="_blank"
          className="group relative sm:mt-96 justify-self-end mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[494px] py-5 bg-[#232C31] text-[#ffff]"
        >
          <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
            YuTrav
          </h1>
          <p className="font-body text-[1rem] text-center py-5">
            Virtual travel application.
          </p>
          <img
            className="absolute group-hover:opacity-0 transition-opacity duration-700 object-cover w-fit xl:max-w-[494px]"
            src="/porto/yutrav.png"
            alt=""
          />
          <img src="/porto/yutrav2.png" alt="" />
          <p className="font-body text-[1rem] text-center pt-5">UI/UX</p>
        </motion.a>

        <motion.a
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          style={{
            scale: scale5,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          href="https://www.behance.net/gallery/166045673/Adex-Legends"
          target="_blank"
          className="group sm:-mt-32 mt-2 inline-block max-w-full sm:w-auto w-full sm:max-w-[494px] py-5 bg-[#F5F5F7]"
        >
          <h1 className="group-hover:-translate-y-5 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1] font-foot text-[3rem] font-[600] text-center py-5">
            Adex Legend
          </h1>
          <p className="font-body text-[1rem] text-center py-5">
            Human Computer Interaction final project.
          </p>
          <img src="/porto/adex.png" alt="" />
          <p className="font-body text-[1rem] text-center pt-5">
            Frontend ── UI/UX
          </p>
        </motion.a>
      </div>

      <div className="w-fit ml-auto mt-5">
        <ScrollReveal delay={0.1}>
          <CustomButton to="/projects">More Projects</CustomButton>
        </ScrollReveal>
      </div>

      <a
        data-cursor-size="60px"
        data-cursor-stick="#stick-item"
        data-cursor-exclusion
        className="mt-5 arrow flex w-fit mx-auto flex-col items-center cursor-pointe font-foot text-[1.3rem] font-medium"
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
      </a>
    </section>
  );
}

export default Projects;
