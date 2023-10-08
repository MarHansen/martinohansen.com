import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import About from "../sections/about";
import Transition from "../animation/page-transition";
import Footer from "../sections/footer";
import Expertise from "../sections/expertise";
import ReturnButton from "../buttons/return-button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function AboutPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const textVariants = {
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };
  return (
    <>
      <Transition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>about──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
        <Container>
          <>
            <div className="mt-24">
              <ReturnButton></ReturnButton>
              <div className="sm:mx-20 mx-5 flex flex-col gap-[2rem] font-light md:text-[6rem] text-[5rem] overflow-hidden">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                  className="sm:-mb-[60px] -mb-[30px] overflow-hidden"
                >
                  I'm Ready
                </motion.h1>
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                  className="flex gap-5 items-center sm:-mb-[60px] -mb-[30px]"
                >
                  <motion.svg
                    style={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[6%] min-w-[70px]"
                  >
                    <circle cx="12" cy="12" r="12" fill="#2B2724" />
                    <path
                      d="M11.3283 1C10.517 1.756 9.86619 2.66767 9.41482 3.68063C8.96346 4.69358 8.72076 5.78707 8.70119 6.89585C8.68163 8.00464 8.88561 9.10601 9.30095 10.1343C9.71630 11.1625 10.3345 12.0966 11.1187 12.8807C11.9029 13.6649 12.8370 14.2830 13.8653 14.6984C14.8936 15.1137 15.9950 15.3177 17.1039 15.2981C18.2127 15.2785 19.3062 15.0358 20.3192 14.5845C21.3322 14.1332 22.2440 13.4824 23.0000 12.6711C22.8276 15.4679 21.5948 18.0937 19.5531 20.013C17.5114 21.9323 14.8144 23.0005 12.0121 23.0000C5.92963 23.0000 1 18.0706 1 11.9895C1 6.13748 5.56516 1.35233 11.3283 1Z"
                      fill="#EDE8E2"
                    />
                  </motion.svg>
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    className="italic"
                  >
                    to Craft
                  </motion.h1>
                </motion.div>
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                  className="flex sm:flex-row flex-col gap-5 overflow-hidden"
                >
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    className="overflow-hidden sm:-mb-[50px] -mb-[20px]"
                  >
                    Digital
                  </motion.h1>
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    className="font-serif"
                  >
                    Experience
                  </motion.h1>
                </motion.div>
              </div>
              <About></About>

              <Expertise></Expertise>
              <Footer></Footer>
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default AboutPage;
