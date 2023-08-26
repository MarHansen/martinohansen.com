import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../animation/scroll-reveal";
import SecondaryButton from "../buttons/secondary-button";

type ProjectCardProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  type: "left" | "right";
  backgroundImage: string;
  title: string;
  description: string;
  buttonTo: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  targetRef,
  type,
  backgroundImage,
  title,
  description,
  buttonTo,
}) => {
  const resolvedTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    resolvedTargetRef.current = targetRef.current;
  }, [targetRef]);

  const { scrollYProgress } = useScroll({
    target: resolvedTargetRef,
    offset: ["start end", "end start"],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], [-10, 50]);

  return (
    <div className={`max-w-full ${type === "right" ? "sm:mt-36 mt-0" : ""}`}>
      <ScrollReveal>
        <div className="overflow-clip relative w-full h-auto flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              y: yScroll,
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className={`img-wrap w-full h-[30rem] bg-cover bg-center`}
          ></motion.div>
        </div>
        <div className="flex justify-between items-center w-auto mt-2">
          <div className="flex flex-col font-body">
            <h3 className="text-[2rem]">{title}</h3>
            <p>{description}</p>
          </div>
          <SecondaryButton to={buttonTo}></SecondaryButton>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProjectCard;
