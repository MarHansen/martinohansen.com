import Container from "../containers/container";
import "../../css/custom.css";
import "../../css/index.css";
import { Helmet } from "react-helmet";
import About from "../sections/about";
import Transition from "../animation/page-transition";
import Footer from "../sections/footer";
import Expertise from "../sections/expertise";
import ReturnButton from "../buttons/return-button";

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
              <ReturnButton to="/"></ReturnButton>
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
