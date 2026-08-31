import Container from "../../containers/container";
import "../../../css/custom.css";
import "../../../css/index.css";
import Transition from "../../animation/page-transition";
import { Outlet } from "react-router-dom";
import ReturnButton from "../../buttons/return-button";
import CustomButton from "../../buttons/main-button";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import HeadHelmet from "../../head-helmet";
import { REVEAL_EASE } from "../../../animation/variants";
import { ProjectData, TechStackKey } from "./data/types";

const SLIDE_EASE = REVEAL_EASE;
const SLIDE_DURATION = 0.9;

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

interface ProjectDetailProps {
  data: ProjectData;
}

function ProjectDetail({ data }: ProjectDetailProps) {
  const {
    headTitle,
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

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    images.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, [images]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? "100%" : "-100%",
        scale: 1.06,
      }),
      center: {
        x: 0,
        scale: 1,
        transition: {
          x: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
          scale: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
        },
      },
      exit: (dir: number) => ({
        x: dir > 0 ? "-100%" : "100%",
        scale: 1.06,
        transition: {
          x: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
          scale: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
        },
      }),
    }),
    [],
  );

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prevIndex) => (prevIndex + dir + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(() => paginate(1), [paginate]);
  const prev = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    if (!isAuto) return;
    const timer = setTimeout(() => next(), 3000);
    return () => clearTimeout(timer);
  }, [index, isAuto, next]);

  const dot = useCallback(
    (target: number) => {
      if (target === index) return;
      setDirection(target > index ? 1 : -1);
      setIndex(target);
    },
    [index],
  );

  return (
    <>
      <Transition>
        <HeadHelmet title={headTitle}></HeadHelmet>
        <Container>
          <>
            <div className="mt-24 mb-10">
              <ReturnButton></ReturnButton>
              <section className="h-full grid lg:grid-cols-3 grid-cols-1">
                <section className="flex flex-col gap-10">
                  <h1 className="font-serif text-[4rem]">{title}</h1>
                  <div className="flex flex-wrap lg:flex-col flex-row justify-start lg:gap-20 gap-16">
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        ROLE
                      </h1>
                      <p>{role}</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DEVELOPED
                      </h1>
                      <p>{developed}</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DOCUMENTATION
                      </h1>
                      <div className="w-fit flex flex-wrap gap-5 mt-3">
                        {docs.map((doc) => (
                          <CustomButton key={doc.to} to={doc.to} openInNewTab>
                            {doc.label}
                          </CustomButton>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                <section className="lg:col-span-2 col-span-1 flex flex-col lg:mt-5 mt-20 gap-5">
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    ABOUT
                  </h1>
                  <p
                    className="font-medium"
                    style={{
                      color: `color-mix(in srgb, ${aboutColor}, var(--color-ink) var(--accent-tint))`,
                    }}
                  >
                    {aboutText}
                  </p>
                  <div
                    className={
                      paragraphsClassName ?? "flex lg:flex-row flex-col gap-3"
                    }
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
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    TECH STACK
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((key) => {
                      const Icon = techStackIcons[key];
                      return <Icon key={key}></Icon>;
                    })}
                    <p className="self-end">...</p>
                  </div>

                  <div
                    onMouseEnter={() => setIsAuto(false)}
                    onMouseLeave={() => setIsAuto(true)}
                    className="m-auto w-full aspect-[calc(16/9)] relative overflow-hidden"
                  >
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        key={images[index]}
                        src={images[index]}
                        alt="caraousel"
                        custom={direction}
                        draggable={false}
                        style={{ willChange: "transform" }}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>

                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:left-5 left-2 transform -translate-y-1/2"
                      onClick={prev}
                    >
                      <div
                        data-cursor-size="60px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                      >
                        {" "}
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_324_42)">
                            <circle
                              cx="21"
                              cy="21"
                              r="21"
                              transform="matrix(-1 0 0 1 42 0)"
                              fill="#070707"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M25 30L16 21L25 12"
                            stroke="#F2F2F2"
                            stroke-width="2"
                          />
                          <defs>
                            <filter
                              id="filter0_b_324_42"
                              x="-60"
                              y="-60"
                              width="162"
                              height="162"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="30"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_324_42"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_324_42"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:right-5 right-2 transform -translate-y-1/2"
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
                          <g filter="url(#filter0_b_324_41)">
                            <circle
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#070707"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M17 30L26 21L17 12"
                            stroke="#F2F2F2"
                            stroke-width="2"
                          />
                          <defs>
                            <filter
                              id="filter0_b_324_41"
                              x="-60"
                              y="-60"
                              width="162"
                              height="162"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="30"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_324_41"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_324_41"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    onMouseEnter={() => setIsAuto(false)}
                    onMouseLeave={() => setIsAuto(true)}
                    className="flex justify-center gap-5 items-center"
                  >
                    {images.map((_, indexs) => (
                      <button
                        type="button"
                        key={indexs}
                        aria-label={`Go to image ${indexs + 1}`}
                        data-cursor-size="30px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                        className={`h-[0.5rem] w-[0.5rem] cursor-pointer rounded-full bg-black bg-opacity-50 transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          index === indexs
                            ? "h-[0.7rem] w-[0.7rem] bg-opacity-100"
                            : ""
                        }`}
                        onClick={() => dot(indexs)}
                      ></button>
                    ))}
                  </div>
                </section>
              </section>

              <Outlet />
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default ProjectDetail;
