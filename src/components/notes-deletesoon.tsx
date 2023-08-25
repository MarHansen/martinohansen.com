import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";

export default function Notes() {
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        },
      },
    },
  };

  return (
    <>
      <ScrollReveal distance={70}>
        <div className="mt-[6rem] bg-[url('/img/header.jpg')] relative overflow-hidden m-auto font-foot text-[5rem] lg:text-[7rem] font-medium border-t-[1px] border-b-[1px] border-black mb-7">
          <motion.h1
            variants={marqueeVariants}
            animate="animate"
            className="whitespace-nowrap my-2"
          >
            ON WORK ── ON PROGRESS ── ON WORK ── ON WORK ── ON PROCESS ── ON
            CODE ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON
            WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON
            WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON
            WORK ── ON WORK ── ON WORK ── ON WORK ── ON PROGRESS ── ON WORK ──
            ON CODE ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON
            WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON WORK ── ON
            WORK ── ON WORK
          </motion.h1>
        </div>
        <h1 className="font-body text-[1.2rem]">
          I'm sorry, but this page is still on progress :D
        </h1>
      </ScrollReveal>
    </>
  );
}
