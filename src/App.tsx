import Navbar from "./components/navbar";
import "./css/custom.css";
import "./css/index.css";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import AboutPage from "./components/pages/about-page";
import { AnimatePresence, MotionConfig } from "framer-motion";
import ProjectsPage from "./components/pages/projects-page";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "./components/pages/catch-page";
import Preloader from "./components/animation/preloader";

function App() {
  const location = useLocation();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <MotionConfig reducedMotion="user">
      <Analytics />
      <Navbar></Navbar>
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <Preloader />
        <Helmet>
          <meta charSet="utf-8" />
          <title>──marhansen</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        </Helmet>

        <AnimatePresence mode="wait">
          {!isMobile && (
            <Cursor
              isGelly={true}
              cursorBackgrounColor="var(--color-ink)"
              cursorInnerColor="var(--color-paper)"
              animationDuration={0.2}
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
            <Route path="/projects/:slug" element={<ProjectsPage />}></Route>
            <Route path="/blog" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </MotionConfig>
  );
}

export default App;
