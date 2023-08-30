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

const images = [
  "/showcase/catpaws/catpaws-1.webp",
  "/showcase/catpaws/catpaws-2.webp",
  "/showcase/catpaws/catpaws-3.webp",
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

function CatPaws() {
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
          <title>CatPaws──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
        <Container>
          <>
            <div className="mt-24 mb-10">
              <ReturnButton></ReturnButton>
              <section className="h-full grid lg:grid-cols-3 grid-cols-1">
                <section className="flex flex-col gap-10">
                  <h1 className="font-serif text-[4rem]">Cat Paws</h1>
                  <div className="flex flex-wrap lg:flex-col flex-row justify-start lg:gap-20 gap-16">
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        ROLE
                      </h1>
                      <p>UI/UX Designer</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DEVELOPED
                      </h1>
                      <p>February 2022</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DOCUMENTATION
                      </h1>
                      <div className="w-fit flex flex-wrap gap-5 mt-3">
                        <CustomButton
                          to="https://medium.com/@marhansen/catpaws-34cb48c56f28"
                          openInNewTab
                        >
                          Medium
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="lg:col-span-2 col-span-1 flex flex-col mt-5 gap-5">
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    ABOUT
                  </h1>
                  <p className="font-medium text-[#B77D30]">
                    There are still many stray cat and dogs that need human
                    hands to help. CatPaws is here to give a solution for those
                    who see a stray animals that needed help but you can’t do
                    much with it. Or you can be a animal rescue for helping the
                    environment.
                  </p>
                  <div className="flex lg:flex-row flex-col gap-3">
                    <p className="w-fit">
                      Stray animals sometimes can't adapt with our daily life
                      and new environment leading to human care and help needs.
                      And sometimes whenever we see stray animals in streets
                      that in dangerous, we can't do much for them. Which lead
                      us to create CatPaws that can help to solve the problem.
                      <br /> CatPaws have 2 sides, one is from the animal
                      rescuer and one for free user who can use the application
                      to help the stray animals who needs help. If the user see
                      some stray animals who need help, they can call the
                      rescuer via application, with the details of the location
                      and condition via maps.
                    </p>
                    <p className="w-fit">
                      Animal issues was a very serious and sensitive case, which
                      lead us to do a very technical and careful research. We've
                      done a survey with more than 60 people to test the
                      prototype, 90% of them supports our idea. The tricky part
                      is to create a concept where both rescuer and normal user
                      can have an advantage to encourage them helping more
                      animals with fake call prevention. So we created a point
                      system that lead user to help more animals out there and
                      punishment system if the call was false.
                    </p>
                  </div>
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    TECH STACK
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    <FigmaIcon></FigmaIcon>
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

export default CatPaws;
