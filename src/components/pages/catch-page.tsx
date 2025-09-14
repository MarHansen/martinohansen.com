// import { Helmet } from "react-helmet";
import ReturnButton from "../buttons/return-button";
import Container from "../containers/container";
import Transition from "../animation/page-transition";
import CustomButton from "../buttons/main-button";
import ReactCurvedText from "react-curved-text";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeadHelmet from "../head-helmet";
import { useDebouncedCallback } from "use-debounce";

function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  const debouncedCheckWindowSize = useDebouncedCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, 250);

  useEffect(() => {
    debouncedCheckWindowSize();

    window.addEventListener("resize", debouncedCheckWindowSize);
    return () => {
      window.removeEventListener("resize", debouncedCheckWindowSize);
    };
  }, [debouncedCheckWindowSize]);

  return (
    <>
      <Transition>
        <HeadHelmet title="Not Found──marhansen"></HeadHelmet>
        <Container>
          <>
            <div className="mt-24">
              <ReturnButton></ReturnButton>
              <section className="-mt-20 h-[80vh] flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                  <h1 className="font-serif sm:text-[10rem] text-[25vw]">4</h1>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 9,
                      ease: "linear",
                    }}
                  >
                    <ReactCurvedText
                      width={isMobile ? 200 : 250}
                      height={isMobile ? 200 : 250}
                      cx={isMobile ? 100 : 125}
                      cy={isMobile ? 100 : 125}
                      rx={isMobile ? 70 : 90}
                      ry={isMobile ? 70 : 90}
                      startOffset={0}
                      reversed={true}
                      text="Error•Error•Error•Error•Error•Error•Error•Error•Error•Error"
                      textProps={{
                        style: { letterSpacing: 3 },
                        fontSize: 20,
                        fontFamily: "serif",
                      }}
                    />
                  </motion.div>
                  <h1 className="font-serif sm:text-[10rem] text-[25vw]">4</h1>
                </div>

                <p className="font-body text-[1.2rem] mt-8">
                  Opps, there is nothing here..
                </p>

                <div className="flex flex-wrap gap-5 mt-10 items-center justify-center">
                  <CustomButton to="/">Home</CustomButton>
                  <CustomButton to="/projects">Projects</CustomButton>
                  <CustomButton to="/about">About</CustomButton>
                </div>
              </section>
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default NotFound;
