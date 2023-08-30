import Container from "../../containers/container";
import "../../../css/custom.css";
import "../../../css/index.css";
import { Helmet } from "react-helmet";
import Transition from "../../animation/page-transition";
import { Outlet } from "react-router-dom";
import ReturnButton from "../../buttons/return-button";
import CustomButton from "../../buttons/main-button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FigmaIcon from "../../techstack/figma-icon";
import HTMLIcon from "../../techstack/html-icon";
import CSSIcon from "../../techstack/css-icon";
import JSIcon from "../../techstack/javascript-icon";

const images = [
  "/showcase/adex/adex-1.webp",
  "/showcase/adex/adex-2.webp",
  "/showcase/adex/adex-3.webp",
  "/showcase/adex/adex-4.webp",
];

const variants = {
  initial: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    };
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: (direction: any) => {
    return {
      x: direction > 0 ? -1000 : 1000,

      transition: {
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      },
    };
  },
};

function Adex() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        next();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [index, isAuto]);

  const next = () => {
    setDirection(1);
    setIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const dot = (indexs: any) => {
    setDirection(indexs > index ? 1 : -1);
    setIndex(indexs);
  };

  return (
    <>
      <Transition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adex──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
        <Container>
          <>
            <div className="mt-24 mb-10">
              <ReturnButton></ReturnButton>
              <section className="h-full grid lg:grid-cols-3 grid-cols-1">
                <section className="flex flex-col gap-10">
                  <h1 className="font-serif text-[4rem]">Adex Legend</h1>
                  <div className="flex flex-wrap lg:flex-col flex-row justify-start lg:gap-20 gap-16">
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        ROLE
                      </h1>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DEVELOPED
                      </h1>
                      <p>May 2022</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DOCUMENTATION
                      </h1>
                      <div className="w-fit flex flex-wrap gap-5 mt-3">
                        <CustomButton
                          to="https://github.com/MarHansen/HCI--Adex-Legends"
                          openInNewTab
                        >
                          Github
                        </CustomButton>
                        <CustomButton
                          to="https://www.behance.net/gallery/171659489/Serene"
                          openInNewTab
                        >
                          Bēhance
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="lg:col-span-2 col-span-1 flex flex-col mt-5 gap-5">
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    ABOUT
                  </h1>
                  <p className="font-medium text-[#7D0F10]">
                    Adex Legends theme was decided by University as a main theme
                    for the final project. Adex Legend is simply a copy of Apex
                    Legends battle royale game with heroes abilities.
                  </p>
                  <div className="flex lg:flex-row flex-col gap-3">
                    <p className="w-fit">
                      Adex Legends is my first time debut designing a UI/UX mega
                      project with figma prototyping. The 'Game' theme in this
                      project is the most challenging part too work at. Game
                      theme usually contains colorful theme and flashy content
                      in the game that represent the game itself. To work with
                      that, we need to do a research from all tactical shooter
                      game websites like 'Valorant' and 'Rainbow 6 siege' and do
                      a benchamarking for each website to find the selling
                      points from the website design itself.
                    </p>
                    <p className="w-fit">
                      The frontend development is the most challenging part.
                      Because the design is quite hard to be done in responsive
                      page and this website project only allowed using vanilla
                      HTML, CSS, JS. We manage to do with some design tweaking
                      in the frontend parts and cutoff the hardest part to do
                      with responsive pages.
                    </p>
                  </div>
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    TECH STACK
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    <FigmaIcon></FigmaIcon>
                    <HTMLIcon></HTMLIcon>
                    <CSSIcon></CSSIcon>
                    <JSIcon></JSIcon>
                  </div>

                  <div
                    onMouseEnter={() => setIsAuto(false)}
                    onMouseLeave={() => setIsAuto(true)}
                    className="m-auto w-full aspect-[calc(16/9)] relative overflow-hidden"
                  >
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={images[index]}
                        src={images[index]}
                        alt="caraousel"
                        custom={direction}
                        loading="lazy"
                        draggable={false}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>

                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:left-10 left-3 transform -translate-y-1/2"
                      onClick={prev}
                    >
                      <div
                        data-cursor-size="80px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                      >
                        {" "}
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_311_34)">
                            <circle
                              cx="29"
                              cy="29"
                              r="29"
                              transform="matrix(-1 0 0 1 58 0)"
                              fill="#2B2724"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M25.1311 19.3335L15.4667 28.5169L25.131 37.7002M42.5333 28.5169L15.7373 28.5169Z"
                            fill="#2B2724"
                            fill-opacity="0.7"
                          />
                          <path
                            d="M25.1311 19.3335L15.4667 28.5169L25.131 37.7002M42.5333 28.5169L15.7373 28.5169"
                            stroke="#EDE8E2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_b_311_34"
                              x="-30"
                              y="-30"
                              width="118"
                              height="118"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="15"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_311_34"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_311_34"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:right-10 right-3 transform -translate-y-1/2"
                      onClick={next}
                    >
                      <div
                        data-cursor-size="80px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                      >
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_311_34)">
                            <circle
                              cx="29"
                              cy="29"
                              r="29"
                              fill="#2B2724"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M32.8689 19.3335L42.5333 28.5169L32.869 37.7002M15.4667 28.5169L42.2627 28.5169Z"
                            fill="#2B2724"
                            fill-opacity="0.7"
                          />
                          <path
                            d="M32.8689 19.3335L42.5333 28.5169L32.869 37.7002M15.4667 28.5169L42.2627 28.5169"
                            stroke="#EDE8E2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <filter
                              id="filter0_b_311_34"
                              x="-30"
                              y="-30"
                              width="118"
                              height="118"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="15"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_311_34"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_311_34"
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
                      <div
                        key={indexs}
                        data-cursor-size="30px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                        className={`w-[0.5rem] h-[0.5rem] rounded-full bg-black bg-opacity-50 cursor-pointer transition duration-300 ease-cubic-bezier${
                          index === indexs
                            ? "bg-black bg-opacity-100 w-[0.7rem] h-[0.7rem] transition duration-300 ease-cubic-bezier"
                            : ""
                        }`}
                        onClick={() => dot(indexs)}
                      ></div>
                    ))}
                  </div>
                </section>
              </section>

              {/* <Footer></Footer> */}
              <Outlet />
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default Adex;
