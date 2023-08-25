import { Tab } from "@headlessui/react";
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
import ScrollReveal from "../scroll-reveal";

function Expertise() {
  const template =
    "flex flex-col items-center font-body text-[1.1rem] gap-6 px-7 py-10";

  const buttonYes =
    "border-b-2 border-black transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1]";
  const buttonNo =
    "border-b-2 transition-all duration-500 ease-cubic-bezier[0.16,1,0.3,1]";

  return (
    <>
      <section className="mb-10 mt-[7rem] overflow-clip text-black">
        <ScrollReveal delay={0.15}>
          <h1 className="w-fit mx-auto font-serif text-[5rem] lg:text-[6rem] font-medium text-black">
            My Toolkit
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-7 w-fit mx-auto font-body text-[1.1rem] lg:text-[1.2rem]">
            Tools that i'm familiar with.
          </p>
        </ScrollReveal>
        <div className="ml-auto mr-0 sm:mr-[20%] w-fit text-[1.5rem] font-serif font-normal ">
          <ScrollReveal delay={0.1}>03</ScrollReveal>
          <div className="border-t border-black my-4"></div>
        </div>

        <div className="flex items-center flex-col mt-5 mb-10">
          <Tab.Group>
            <ScrollReveal delay={0.3}>
              <Tab.List className="flex sm:gap-20 gap-10 items-center justify-center font-body sm:text-[1.3rem] text-[1.2rem]">
                <Tab className="focus:outline-none">
                  {({ selected }) => (
                    <button
                      data-cursor-size="60px"
                      data-cursor-stick="#stick-item"
                      data-cursor-exclusion
                      className={selected ? buttonYes : buttonNo}
                    >
                      Frontend
                    </button>
                  )}
                </Tab>
                <Tab className="focus:outline-none">
                  {({ selected }) => (
                    <button
                      data-cursor-size="60px"
                      data-cursor-stick="#stick-item"
                      data-cursor-exclusion
                      className={selected ? buttonYes : buttonNo}
                    >
                      Git.
                    </button>
                  )}
                </Tab>
                <Tab className="focus:outline-none">
                  {({ selected }) => (
                    <button
                      data-cursor-size="60px"
                      data-cursor-stick="#stick-item"
                      data-cursor-exclusion
                      className={selected ? buttonYes : buttonNo}
                    >
                      Database
                    </button>
                  )}
                </Tab>
                <Tab className="focus:outline-none">
                  {({ selected }) => (
                    <button
                      data-cursor-size="60px"
                      data-cursor-stick="#stick-item"
                      data-cursor-exclusion
                      className={selected ? buttonYes : buttonNo}
                    >
                      etc.
                    </button>
                  )}
                </Tab>
              </Tab.List>
            </ScrollReveal>

            <ScrollReveal>
              <Tab.Panels>
                <Tab.Panel
                  as="div"
                  className="mt-10 grid lg:grid-cols-6 place-items-center grid-cols-3 gap-5"
                >
                  <ScrollReveal delay={0.1}>
                    <div className={template}>
                      <ReactOriginal size={100}></ReactOriginal>
                      <p>React JS</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className={template}>
                      <Html5Plain size={100}></Html5Plain>
                      <p>HTML</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className={template}>
                      <Css3Plain size={100}></Css3Plain>
                      <p>CSS</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <div className={template}>
                      <JavascriptOriginal size={100}></JavascriptOriginal>
                      <p>JavaScript</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.5}>
                    <div className={template}>
                      <BootstrapOriginal size={100}></BootstrapOriginal>
                      <p>Bootstrap</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.6}>
                    <div className={template}>
                      <TailwindcssPlain size={100}></TailwindcssPlain>
                      <p>Tailwind</p>
                    </div>
                  </ScrollReveal>
                </Tab.Panel>

                <Tab.Panel
                  as="div"
                  className="mt-10 grid grid-cols-2 place-items-center gap-5"
                >
                  <ScrollReveal delay={0.1}>
                    <div className={template}>
                      <GithubOriginal size={100}></GithubOriginal>
                      <p>Github</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className={template}>
                      <GitOriginal size={100}></GitOriginal>
                      <p>git.</p>
                    </div>
                  </ScrollReveal>
                </Tab.Panel>

                <Tab.Panel
                  as="div"
                  className="mt-10 grid grid-cols-1 place-items-center gap-5"
                >
                  <ScrollReveal delay={0.1}>
                    <div className={template}>
                      <MysqlOriginal size={100}></MysqlOriginal>
                      <p>mySQL</p>
                    </div>
                  </ScrollReveal>
                </Tab.Panel>

                <Tab.Panel
                  as="div"
                  className="mt-10 grid lg:grid-cols-5 place-items-center grid-cols-3 gap-5"
                >
                  <ScrollReveal delay={0.1}>
                    <div className={template}>
                      <COriginal size={100}></COriginal>
                      <p>C</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className={template}>
                      <CplusplusOriginal size={100}></CplusplusOriginal>
                      <p>C++</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className={template}>
                      <PythonOriginal size={100}></PythonOriginal>
                      <p>Python</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <div className={template}>
                      <FigmaOriginal size={100}></FigmaOriginal>
                      <p>Figma</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.5}>
                    <div className={template}>
                      <JavaOriginal size={100}></JavaOriginal>
                      <p>Java</p>
                    </div>
                  </ScrollReveal>
                </Tab.Panel>
              </Tab.Panels>
            </ScrollReveal>
          </Tab.Group>
        </div>
        <a
          data-cursor-size="60px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          className="mt-10 arrow mx-auto flex w-fit flex-col items-center cursor-pointe font-foot text-[1.3rem] font-medium"
        >
          <ScrollReveal delay={0.5}>
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
            <p>Contact</p>
          </ScrollReveal>
        </a>
      </section>
    </>
  );
}

export default Expertise;
