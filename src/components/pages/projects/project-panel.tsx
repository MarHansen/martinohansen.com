import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ReactIcon from "../../techstack/react-icon";
import TailwindIcon from "../../techstack/tailwind-icon";
import GolangIcon from "../../techstack/golang-icon";
import LambdaIcon from "../../techstack/lambda-icon";
import RDSIcon from "../../techstack/rds-icon";
import S3Icon from "../../techstack/s3-icon";
import FigmaIcon from "../../techstack/figma-icon";
import HTMLIcon from "../../techstack/html-icon";
import CSSIcon from "../../techstack/css-icon";
import JSIcon from "../../techstack/javascript-icon";
import CustomButton from "../../buttons/main-button";
import { ProjectData, TechStackKey } from "./data/types";

const techStackIcons: Record<TechStackKey, () => JSX.Element> = {
  react: ReactIcon,
  tailwind: TailwindIcon,
  golang: GolangIcon,
  lambda: LambdaIcon,
  rds: RDSIcon,
  s3: S3Icon,
  figma: FigmaIcon,
  html: HTMLIcon,
  css: CSSIcon,
  js: JSIcon,
};

interface ProjectPanelProps {
  data: ProjectData;
  positionLabel?: string;
  isActive?: boolean;
}

function ProjectPanel({
  data,
  positionLabel,
  isActive = true,
}: ProjectPanelProps) {
  const {
    title,
    role,
    developed,
    docs,
    aboutColor,
    aboutText,
    paragraphs,
    paragraphsClassName,
    techStack,
    images,
  } = data;

  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { amount: 0.55 });

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [, setIsAnimating] = useState(false);

  useEffect(() => {
    images.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, [images]);

  const variants = useMemo(
    () => ({
      initial: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
      animate: {
        x: 0,
        opacity: 1,
        transition: { x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      },
      exit: (dir: number) => ({
        x: dir > 0 ? "-100%" : "100%",
        transition: { x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }),
    }),
    [],
  );

  const next = useCallback(() => {
    setIsAnimating((animating) => {
      if (animating) return animating;
      setDirection(1);
      setIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 400);
      return true;
    });
  }, [images.length]);

  const prev = useCallback(() => {
    setIsAnimating((animating) => {
      if (animating) return animating;
      setDirection(-1);
      setIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
      );
      setTimeout(() => setIsAnimating(false), 400);
      return true;
    });
  }, [images.length]);

  const dot = useCallback(
    (target: number) => {
      setDirection(target > index ? 1 : -1);
      setIndex(target);
    },
    [index],
  );

  useEffect(() => {
    if (!inView || isHovered || !isActive) return;
    const timer = setTimeout(() => next(), 3000);
    return () => clearTimeout(timer);
  }, [index, inView, isHovered, isActive, next]);

  return (
    <div
      ref={panelRef}
      className="mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-24 md:px-10 lg:justify-start lg:px-16 lg:py-20"
    >
      <span className="font-body font-bold text-black text-opacity-75">
        {positionLabel}
      </span>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
        <section className="flex flex-col gap-10">
          <h1 className="font-serif text-[3.25rem] leading-[1.05] lg:text-[4rem]">
            {title}
          </h1>
          <div className="flex flex-row flex-wrap justify-start gap-12 lg:flex-col lg:gap-10">
            <div>
              <h2 className="font-body font-bold text-black text-opacity-75">
                ROLE
              </h2>
              <p>{role}</p>
            </div>
            <div>
              <h2 className="font-body font-bold text-black text-opacity-75">
                DEVELOPED
              </h2>
              <p>{developed}</p>
            </div>
            <div>
              <h2 className="font-body font-bold text-black text-opacity-75">
                DOCUMENTATION
              </h2>
              <div className="mt-3 flex w-fit flex-wrap gap-4">
                {docs.map((doc) => (
                  <CustomButton key={doc.to} to={doc.to} openInNewTab>
                    {doc.label}
                  </CustomButton>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-1 mt-12 flex flex-col gap-5 lg:col-span-2 lg:mt-0">
          <h2 className="font-body font-bold text-black text-opacity-75">
            ABOUT
          </h2>
          <p
            className="font-medium"
            style={{
              color: `color-mix(in srgb, ${aboutColor} 70%, var(--color-ink))`,
            }}
          >
            {aboutText}
          </p>
          <div
            className={paragraphsClassName ?? "flex flex-col gap-3 lg:flex-row"}
          >
            {paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="w-fit">
                {paragraph.split("\n").map((line, lineIndex, arr) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <h2 className="font-body font-bold text-black text-opacity-75">
            TECH STACK
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((key) => {
              const Icon = techStackIcons[key];
              return <Icon key={key}></Icon>;
            })}
            <p className="self-end">...</p>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative m-auto mt-3 aspect-[calc(16/9)] w-full overflow-hidden"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                key={images[index]}
                src={images[index]}
                alt={`${title} showcase`}
                custom={direction}
                draggable={false}
                className="absolute left-0 top-0 h-full w-full object-cover object-center"
              />
            </AnimatePresence>

            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 scale-75 transform lg:left-5 lg:scale-100"
              onClick={prev}
            >
              <div
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    transform="matrix(-1 0 0 1 42 0)"
                    fill="#070707"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M25 30L16 21L25 12"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 scale-75 transform lg:right-5 lg:scale-100"
              onClick={next}
            >
              <div
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="#070707"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M17 30L26 21L17 12"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-center gap-5"
          >
            {images.map((_, dotIndex) => (
              <button
                type="button"
                key={dotIndex}
                aria-label={`Go to image ${dotIndex + 1}`}
                data-cursor-size="30px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
                className={`h-[0.5rem] w-[0.5rem] cursor-pointer rounded-full bg-black bg-opacity-50 transition duration-300 ${
                  index === dotIndex
                    ? "h-[0.7rem] w-[0.7rem] bg-opacity-100"
                    : ""
                }`}
                onClick={() => dot(dotIndex)}
              ></button>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProjectPanel;
