import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
// import { Helmet } from "react-helmet";
import Projects from "../sections/projects";
import About from "../sections/about";
import Landing from "../sections/landing";
import Expertise from "../sections/expertise";
import Footer from "../sections/footer";
import Transition from "../animation/page-transition";
import ScrollReveal from "../animation/scroll-reveal";
import CustomButton from "../buttons/main-button";
import HeadHelmet from "../head-helmet";

function Home() {
  return (
    <>
      <Transition>
        <HeadHelmet title="──marhansen"></HeadHelmet>
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
