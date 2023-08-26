import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import Projects from "../sections/projects";
import About from "../sections/about";
import Landing from "../sections/landing";
import Expertise from "../sections/expertise";
import Footer from "../sections/footer";
import Transition from "../animation/page-transition";
import ScrollReveal from "../animation/scroll-reveal";
import CustomButton from "../buttons/main-button";

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
            <div className="w-fit  mr-auto ml-auto sm:mr-0 my-10">
              <ScrollReveal delay={0.3}>
                <CustomButton to="/about">More About me</CustomButton>
              </ScrollReveal>
            </div>
            <Expertise></Expertise>
            <Footer></Footer>
          </Container>
        </>
      </Transition>
    </>
  );
}

export default Home;
