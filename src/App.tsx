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
import { Analytics } from "@vercel/analytics/react";
import NotFound from "./components/pages/catch-page";
import Serene from "./components/pages/projects/serene";
import CatPaws from "./components/pages/projects/catpaws";
import YuTrav from "./components/pages/projects/yutrav";
import Adex from "./components/pages/projects/adex-legend";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      <Analytics />
      <Navbar></Navbar>
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>

        <AnimatePresence mode="wait">
          <ScrollToTop />
          {!isMobile && (
            <Cursor
              isGelly={true}
              gellyAnimationAmount={50}
              animationDuration={0.5}
              cursorSize={10}
              sizeAnimationEase={[0.165, 0.84, 0.44, 1]}
              sizeAnimationDuration={0.35}
              textAnimationEase={[0.165, 0.84, 0.44, 1]}
              textAnimationDuration={0.4}
            />
          )}
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/projects/TUNEMA" element={<Tunema />}></Route>
            <Route path="/projects/Serene" element={<Serene />}></Route>
            <Route path="/projects/CatPaws" element={<CatPaws />}></Route>
            <Route path="/projects/YuTrav" element={<YuTrav />}></Route>
            <Route path="/projects/AdexLegend" element={<Adex />}></Route>
            <Route path="/blog" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </>
  );
}

export default App;
