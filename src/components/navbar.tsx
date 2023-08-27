import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  //preventing user to scrolling when navbar opened
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navOpen]);

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
      "z-50 navbar fixed top-0 left-0 w-full flex justify-between align-middle sm:px-[3em] px-[1.2em] bg-white",
    dark: "z-50 navbar fixed top-0 left-0 w-full flex justify-between align-middle sm:px-[3em] px-[1.2em] bg-black",
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
            <div className="LeftSide flex sm:gap-14 gap-6 items-center font-medium">
              <Link
                data-cursor-size="60px"
                data-cursor-stick="#stick-item"
                data-cursor-exclusion
                to="/"
              >
                <motion.svg
                  whileHover={{ scale: 0.85 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
                    fill={navOpen ? "#EDE8E2" : "#2B2724"}
                  />
                </motion.svg>
              </Link>

              <a
                href="https://www.behance.net/marhansen"
                target="blank"
                className={check}
              >
                Be.
              </a>
              <a
                href="https://www.linkedin.com/in/martino-hansen-290b90221/"
                target="blank"
                className={check}
              >
                In.
              </a>
              <a
                href="https://github.com/MarHansen"
                target="blank"
                className={check}
              >
                Git.
              </a>
            </div>
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
