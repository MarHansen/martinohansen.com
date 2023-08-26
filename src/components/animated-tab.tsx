import { motion } from "framer-motion";
import { useState } from "react";
import {
  ReactOriginal,
  Html5Plain,
  Css3Plain,
  JavascriptOriginal,
  BootstrapOriginal,
  TailwindcssPlain,
  GithubOriginal,
  GitOriginal,
  MysqlOriginal,
  COriginal,
  CplusplusOriginal,
  PythonOriginal,
  FigmaOriginal,
  JavaOriginal,
} from "devicons-react";
import ScrollReveal from "./scroll-reveal";

let tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "git", label: "git." },
  { id: "database", label: "Database" },
  { id: "etc", label: "etc." },
];

// Animated tabs code from https://buildui.com/recipes/animated-tabs
function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const template =
    "flex flex-col items-center font-body text-[1.1rem] gap-6 px-7 py-10";

  const TabContent: { [key: string]: JSX.Element } = {
    frontend: (
      <div className="mt-10 grid lg:grid-cols-6 place-items-center grid-cols-3 gap-5">
        <div className={template}>
          <ReactOriginal size={100}></ReactOriginal>
          <p>React JS</p>
        </div>

        <div className={template}>
          <Html5Plain size={100}></Html5Plain>
          <p>HTML</p>
        </div>

        <div className={template}>
          <Css3Plain size={100}></Css3Plain>
          <p>CSS</p>
        </div>

        <div className={template}>
          <JavascriptOriginal size={100}></JavascriptOriginal>
          <p>JavaScript</p>
        </div>

        <div className={template}>
          <BootstrapOriginal size={100}></BootstrapOriginal>
          <p>Bootstrap</p>
        </div>

        <div className={template}>
          <TailwindcssPlain size={100}></TailwindcssPlain>
          <p>Tailwind</p>
        </div>
      </div>
    ),

    git: (
      <div className="mt-10 grid grid-cols-2 place-items-center gap-5">
        <div className={template}>
          <GithubOriginal size={100}></GithubOriginal>
          <p>Github</p>
        </div>

        <div className={template}>
          <GitOriginal size={100}></GitOriginal>
          <p>git.</p>
        </div>
      </div>
    ),

    database: (
      <div className="mt-10 grid grid-cols-1 place-items-center gap-5">
        <div className={template}>
          <MysqlOriginal size={100}></MysqlOriginal>
          <p>mySQL</p>
        </div>
      </div>
    ),
    etc: (
      <div className="mt-10 grid lg:grid-cols-5 place-items-center grid-cols-3 gap-5">
        <div className={template}>
          <COriginal size={100}></COriginal>
          <p>C</p>
        </div>

        <div className={template}>
          <CplusplusOriginal size={100}></CplusplusOriginal>
          <p>C++</p>
        </div>

        <div className={template}>
          <PythonOriginal size={100}></PythonOriginal>
          <p>Python</p>
        </div>

        <div className={template}>
          <FigmaOriginal size={100}></FigmaOriginal>
          <p>Figma</p>
        </div>

        <div className={template}>
          <JavaOriginal size={100}></JavaOriginal>
          <p>Java</p>
        </div>
      </div>
    ),
  };

  return (
    <>
      <motion.section className="flex flex-col items-center">
        <div className="flex justify-center md:space-x-10 space-x-2">
          {tabs.map((tab) => (
            <button
              data-cursor-size="60px"
              data-cursor-stick="#stick-item"
              data-cursor-exclusion
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : ""
              } relative rounded-full md:px-5 px-3 py-2 text-[1.2rem] font-medium font-body text-black transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
        <ScrollReveal>{TabContent[activeTab]}</ScrollReveal>
      </motion.section>
    </>
  );
}

export default AnimatedTabs;
