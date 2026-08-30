import { useState } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const next = !dark;

    const applyTheme = () => {
      flushSync(() => setDark(next));
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch (e) {}
    };

    const DURATION = 900;
    const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
    const cover = Math.hypot(window.innerWidth / 2, window.innerHeight);
    const radius = cover * 1.5;
    document.documentElement.style.setProperty(
      "--theme-reveal-radius",
      `${radius}px`,
    );

    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => unknown;
      }
    ).startViewTransition;

    if (typeof startViewTransition === "function") {
      startViewTransition.call(document, applyTheme);
      return;
    }

    const disc = document.createElement("div");
    disc.style.cssText =
      "position:fixed;inset:0;z-index:2147483647;pointer-events:none;" +
      "will-change:opacity;" +
      `background:${next ? "#070707" : "#f2f2f2"};` +
      "clip-path:circle(0px at 50% 100%);";
    document.body.appendChild(disc);

    disc.animate(
      [
        { clipPath: "circle(0px at 50% 100%)" },
        { clipPath: `circle(${radius}px at 50% 100%)` },
      ],
      { duration: DURATION, easing: EASING, fill: "forwards" },
    );

    window.setTimeout(() => {
      applyTheme();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          disc
            .animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 300,
              easing: "ease-out",
              fill: "forwards",
            })
            .finished.then(() => disc.remove());
        });
      });
    }, DURATION * 0.85);
  };

  //chat gpt logic for hiding navbar, i'm to lazy T_T, i want to disable it temporary, because its too annoying
  // const [show, setShow] = useState(true);
  // const [scrollDirection, setScrollDirection] = useState("up");
  // const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  // const controlNavbar = () => {
  //   const currentScrollY = window.scrollY;
  //   setScrollDirection(
  //     currentScrollY > prevScrollY
  //       ? "down"
  //       : currentScrollY < prevScrollY
  //       ? "up"
  //       : scrollDirection
  //   );
  //   setPrevScrollY(currentScrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, [prevScrollY]);

  // useEffect(() => {
  //   setShow(scrollDirection === "up");
  // }, [scrollDirection]);

  // const variants = {
  //   visible: { y: 0 },
  //   hidden: { y: -90 },
  // };
  //ends here

  const colorVariant = {
    light:
      "z-50 navbar fixed top-0 left-0 w-full flex justify-between align-middle sm:px-[3em] px-[1.2em] transition duration-500 ease-cubic-bezier bg-white",
    dark: "z-50 navbar fixed top-0 left-0 w-full flex justify-between align-middle sm:px-[3em] px-[1.2em] transition duration-500 ease-cubic-bezier bg-black",
  };
  const navColor = navOpen ? colorVariant.dark : colorVariant.light;

  const hoverVariant = {
    light:
      "duration-200 relative mt-auto mb-auto text-black hover:text-black hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-black",
    dark: "duration-200 relative mt-auto mb-auto text-white hover:text-white hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-white",
  };
  const check = navOpen ? hoverVariant.dark : hoverVariant.light;

  return (
    <>
      <div className="nav fixed z-[100] -top-1 font-body text-[1rem] py-2">
        <div className="nav-container">
          <motion.div
            // variants={variants}
            initial={false}
            // animate={show ? "visible" : "hidden"}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={navColor}
          >
            <div className="LeftSide flex sm:gap-14 gap-6 items-center font-[420]">
              <Link
                data-cursor-size="60px"
                data-cursor-stick=".stick-item"
                data-cursor-exclusion
                to="/"
                className="group inline-flex"
              >
                <span className="stick-item inline-flex">
                  <svg
                    className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.85]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      className={navOpen ? "fill-white" : "fill-black"}
                    />
                  </svg>
                </span>
              </Link>

              <a
                href="https://www.behance.net/marhansen"
                target="blank"
                className={check}
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
              >
                Bē.
              </a>
              <a
                href="https://www.linkedin.com/in/martino-hansen-290b90221/"
                target="blank"
                className={check}
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
              >
                In.
              </a>
              <a
                href="https://github.com/MarHansen"
                target="blank"
                className={check}
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
              >
                Git.
              </a>
            </div>
            <div className="RightSide flex items-center sm:gap-8 gap-5">
              <button
                type="button"
                aria-label="Toggle dark mode"
                aria-pressed={dark}
                onClick={toggleTheme}
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
                className={`${
                  navOpen ? "text-white" : "text-black"
                } group inline-flex items-center transition-colors`}
              >
                <svg
                  className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-hover:scale-[0.85]"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {dark ? (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="4.5" />
                      <path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77" />
                    </>
                  )}
                </svg>
              </button>
              <div
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
                className="menu-toggle cursor-pointer"
                onClick={() => setNavOpen(!navOpen)}
              >
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                  <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                  <span
                    className={navOpen ? "lineBottom spin" : "lineBottom"}
                  ></span>
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className="nav-overlay fixed bg-black -z-10 -top-full left-0 w-full h-screen overflow-hidden p-[4em]"
            style={{
              top: navOpen ? "0" : "-130%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className="nav-links absolute top-[50%] left-[50%] m-0 p-0 flex flex-col items-center justify-center font-serif sm:text-8xl text-6xl text-white">
              <motion.li
                whileHover={{ scale: 0.85 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="nav-item"
              >
                <Link
                  data-cursor-size="100px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  className="my-5"
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                >
                  Home
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
              <motion.li
                whileHover={{ scale: 0.85 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="nav-item my-5"
              >
                <Link
                  data-cursor-size="100px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  to="/projects"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.9s" : "0s",
                  }}
                >
                  Projects
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
              <motion.li
                whileHover={{ scale: 0.85 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="nav-item my-5"
              >
                <Link
                  data-cursor-size="100px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  to="/about"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1s" : "0s",
                  }}
                >
                  About
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
              <motion.li
                whileHover={{ scale: 0.85 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="nav-item my-5"
              >
                <Link
                  data-cursor-size="100px"
                  data-cursor-stick="#stick-item"
                  data-cursor-exclusion
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                  }}
                >
                  Blog
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
