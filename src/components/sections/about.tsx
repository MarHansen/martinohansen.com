import ScrollReveal from "../animation/scroll-reveal";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0, borderRadius: "100%" },
    visible: { opacity: 1, scale: 1, borderRadius: 0 },
    hover: { scale: 1.05, transition: { duration: 0.1, ease: "easeInOut" } },
  };
  const targetRef = useRef<HTMLDivElement>(null);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmall(window.innerWidth < 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const xScroll = useTransform(scrollYProgress, [0, 1], [800, -1000]);
  const yScroll = useTransform(scrollYProgress, [0.3, 1], [0, 150]);
  const xScrollMobile = useTransform(scrollYProgress, [0, 1], [200, -800]);

  return (
    <>
      <section
        id="about"
        ref={targetRef}
        className="pt-[5rem] max-w-none px-0 overflow-hidden text-black"
      >
        <div
          data-cursor-size="100px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          ref={ref}
          className="relative overflow-hidden m-auto font-serif text-[5rem] lg:text-[7rem] font-medium border-t-[1px] mb-7"
        >
          <motion.div
            initial={
              isSmall ? { width: "100%", left: 0 } : { width: 0, left: 0 }
            }
            animate={
              isSmall
                ? { width: "100%", left: 0 }
                : { width: inView ? "100%" : 0, left: 0 }
            }
            transition={{ duration: 0.5, delay: 0 }}
            className="h-[1px] bg-black"
          />
          <motion.h1
            style={{
              x: isMobile ? xScrollMobile : xScroll,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="whitespace-nowrap"
          >
            About Me ── About Me ── About Me ── About Me ── About Me ── About Me
            ── About Me ── About Me
          </motion.h1>
          <motion.div
            initial={
              isSmall ? { width: "100%", right: 0 } : { width: 0, right: 0 }
            }
            animate={
              isSmall
                ? { width: "100%", right: 0 }
                : { width: inView ? "100%" : 0, right: 0 }
            }
            transition={{ duration: 0.5, delay: 0 }}
            className="absolute bottom-0 h-[1px] bg-black"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-end content-end font-body text-[1.1rem] gap-1 sm:gap-10 text-black">
          <div className="text-[1.5rem] font-serif font-normal">
            <ScrollReveal delay={0.1}>02</ScrollReveal>
          </div>
          <div className="flex flex-col md:w-[40%] w-[100%] justify-around lg:gap-0 gap-10">
            <div className="flex gap-10 flex-col">
              <ScrollReveal distance={40} delay={0.1}>
                Hello, i am Martino Hansen. I am an aspiring UI/UX designer and
                front-end developer based in Indonesia, currently pursuing my
                undergraduate studies at Binus University. With a keen interest
                in React and Next.js, I strive to craft captivating digital
                experiences that leave a lasting impression."
                <br />
              </ScrollReveal>
              <ScrollReveal distance={50} delay={0.2}>
                Ever since my first encounter with computer science major, I
                discovered an unwavering passion for web development and UI/UX
                design, where I found the perfect blend of creativity and
                technology, allowing me to shape digital experiences that
                inspire and delight users.
              </ScrollReveal>
            </div>
            <div className="self-start md:self-end text-left md:text-right flex gap-4 flex-col">
              <ScrollReveal distance={60} delay={0.3}>
                I do UI/UX designing.
              </ScrollReveal>
              <ScrollReveal distance={70} delay={0.3}>
                I do Web Development.
              </ScrollReveal>
              <ScrollReveal distance={80} delay={0.3}>
                I do Code things.
              </ScrollReveal>
              <ScrollReveal distance={90} delay={0.3}>
                {" "}
                I do Video Editing.
              </ScrollReveal>
            </div>
          </div>

          <motion.img
            draggable={false}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 0.15,
              delay: 0.01,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              y: isSmall ? 0 : yScroll,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            whileHover={isMobile ? {} : { scale: 0.9, rotate: -10 }}
            whileTap={isMobile ? {} : "hover"}
            src="/about/profile-pic.webp"
            className="object-contain max-w-[25rem] lg:max-w-[30rem] md:mt-0 mt-5 transition-all duration-700 ease-in-out filter grayscale hover:filter-none"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default About;
