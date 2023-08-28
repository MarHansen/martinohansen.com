import Container from "../../containers/container";
import "../../../css/custom.css";
import "../../../css/index.css";
import { Helmet } from "react-helmet";
import Transition from "../../animation/page-transition";
import Notes from "../../containers/notes-deletesoon";
import Footer from "../../sections/footer";
import { Outlet } from "react-router-dom";
import ReturnButton from "../../buttons/return-button";

function Tunema() {
  return (
    <>
      <Transition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TUNEMA──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>
        <Container>
          <>
            <div className="mt-24">
              <ReturnButton></ReturnButton>
              <Notes></Notes>

              <Footer></Footer>
              <Outlet />
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default Tunema;
