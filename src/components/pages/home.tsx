import Container from "../container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import Projects from "../sections/projects";
import About from "../sections/about";
import Landing from "../sections/landing";
import Expertise from "../sections/expertise";
import Footer from "../sections/footer";
import Transition from "../../page-transition";
import ScrollReveal from "../scroll-reveal";
import CustomButton from "../main-button";

function Home() {
  return (
    <>
      <Transition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>

        <>
          <Landing></Landing>
          <Container>
            <Projects></Projects>
            <About></About>
            <div className="w-fit ml-auto mt-5">
              <ScrollReveal delay={0.3}>
                <CustomButton to="/about">More About me.</CustomButton>
              </ScrollReveal>
            </div>

            <a
              data-cursor-size="60px"
              data-cursor-stick="#stick-item"
              data-cursor-exclusion
              className="sm:mt-10 mt-36 arrow mx-auto flex w-fit flex-col items-center cursor-pointe font-foot text-[1.3rem] font-medium"
            >
              <ScrollReveal delay={0.3}>
                <svg
                  className="mx-auto"
                  width="38"
                  height="53"
                  viewBox="0 0 38 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 33.79L19 52L1 33.79M19 1V51.49"
                    stroke="#2B2724"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Toolkit</p>
              </ScrollReveal>
            </a>

            <Expertise></Expertise>
            <Footer></Footer>
          </Container>
        </>
      </Transition>
    </>
  );
}

export default Home;
