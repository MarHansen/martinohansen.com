import Container from "../container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import About from "../sections/about";
import Transition from "../../page-transition";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Expertise from "../sections/expertise";

function AboutPage() {
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
              <motion.div
                className="w-fit"
                whileHover={{ x: 25 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  data-cursor-size="80px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  to="/"
                  className="group my-10 w-fit flex items-center gap-7 font-foot font-medium text-[3rem]"
                >
                  <svg
                    width="53"
                    height="38"
                    viewBox="0 0 53 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.21 37L0.999999 19L19.21 0.999999M52 19L1.51 19"
                      stroke="#2B2724"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="duration-200 relative mt-auto mb-auto w-fit text-black group-hover:text-black group-hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-black">
                    Return
                  </p>
                </Link>
              </motion.div>

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
