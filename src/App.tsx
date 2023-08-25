import Navbar from "./components/navbar";
import "./css/custom.css";
import "./css/index.css";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import AboutPage from "./components/pages/about-page";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ProjectsPage from "./components/pages/projects-page";
import { ReactLenis } from "@studio-freight/react-lenis";
import Tunema from "./components/pages/projects/tunema";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { useState } from "react";
//test

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>

        <AnimatePresence mode="wait">
          <ScrollToTop />
          {!isMobile && <Cursor isGelly={true} cursorSize={15} />}
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/projects/TUNEMA" element={<Tunema />}></Route>
            <Route path="/toolkit" element={<ProjectsPage />}></Route>
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </>
  );
}

export default App;
