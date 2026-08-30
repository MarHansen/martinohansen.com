import ScrollReveal from "../animation/scroll-reveal";
import { RevealGroup, RevealItem } from "../animation/reveal-group";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import useImagePreloader from "../animation/image-preload";

function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.1 });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, scale: 0, borderRadius: "100%" },
    visible: { opacity: 1, scale: 1, borderRadius: 0 },
    hover: { scale: 1.1, transition: { duration: 0.1, ease: "easeInOut" } },
  };
  const targetRef = useRef<HTMLDivElement>(null);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const imageUrl = "/about/profile-pic.webp";
  const isImageLoaded = useImagePreloader(imageUrl);

  const [isSmall, setIsSmall] = useState<boolean>(false);

  const debouncedCheckWindowSize = useDebouncedCallback(() => {
    setIsSmall(window.innerWidth < 768);
  }, 250);

  useEffect(() => {
    debouncedCheckWindowSize();

    window.addEventListener("resize", debouncedCheckWindowSize);
    return () => {
      window.removeEventListener("resize", debouncedCheckWindowSize);
    };
  }, [debouncedCheckWindowSize]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const xScroll = useTransform(
    scrollYProgress,
    [0, 1],
    isSmall ? [200, -800] : [800, -1000]
  );
  const yScroll = useTransform(
    scrollYProgress,
    [0, 1],
    isSmall ? [0, 0] : [-50, 50]
  );

  return (
    <>
      <section
        id="about"
        ref={targetRef}
        className="pt-[5rem] max-w-none px-0 overflow-hidden text-black"
      >
        <div
          data-cursor-size="150px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          ref={titleRef}
          className="relative overflow-hidden m-auto font-serif text-[5rem] lg:text-[7rem] font-medium border-t-[1px] mb-7"
        >
          <motion.div
            initial={
              isSmall ? { width: "100%", left: 0 } : { width: 0, left: 0 }
            }
            animate={
              isSmall
                ? { width: "100%", left: 0 }
                : { width: titleInView ? "100%" : 0, left: 0 }
            }
            transition={{ duration: 0.5, delay: 0 }}
            className="h-[1px] bg-black"
          />
          <motion.h1
            style={{
              x: xScroll,
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
                : { width: titleInView ? "100%" : 0, right: 0 }
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
            <RevealGroup className="flex gap-10 flex-col">
              <RevealItem>
                Hello, I am Martino Hansen, an aspiring UI/UX designer and
                front-end developer based in Indonesia. I am currently pursuing
                my undergraduate studies at Binus University. With a strong
                interest in React and Next.js, I strive to create engaging
                digital experiences that leave a lasting impression."
                <br />
              </RevealItem>
              <RevealItem>
                Ever since my first encounter with computer science, I have
                developed an unwavering passion for web development and UI/UX
                design. I discovered the perfect blend of creativity and
                technology in this field, which allows me to craft digital
                experiences that both inspire and delight users.
              </RevealItem>
            </RevealGroup>
            <RevealGroup className="self-start md:self-end text-left md:text-right flex gap-4 flex-col">
              <RevealItem>I do UI/UX designing.</RevealItem>
              <RevealItem>I do Web Development.</RevealItem>
              <RevealItem>I do Code things.</RevealItem>
              <RevealItem> I do Video Editing.</RevealItem>
            </RevealGroup>
          </div>

          <div ref={imageRef} className="overflow-clip relative">
            <motion.img
              draggable={false}
              initial="hidden"
              style={{
                y: yScroll,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              animate={imageInView && isImageLoaded ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1,
                delay: 0.01,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      scale: 1.05,
                    }
              }
              whileTap={isMobile ? {} : "hover"}
              src={imageUrl}
              className="object-cover max-w-[25rem] lg:max-w-[30rem] md:mt-0 mt-5 transition-all duration-700 ease-in-out filter grayscale hover:filter-none"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
