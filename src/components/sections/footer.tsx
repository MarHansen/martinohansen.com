import CustomButton from "../buttons/main-button";
import ScrollReveal from "../animation/scroll-reveal";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const buttonClass2 =
    "duration-200 text-[1.1rem] relative mt-auto mb-auto w-fit text-black hover:text-black hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-black";

  return (
    <>
      <section ref={ref} className="mt-32 mb-20 text-black">
        <ScrollReveal>
          <div className="relative md:w-[40%] w-[100%] mr-auto overflow-hidden mb-5">
            <Link
              data-cursor-size="150px"
              data-cursor-stick="#stick-item"
              data-cursor-exclusion
              data-cursor-text="email"
              to="mailto:marhancens@gmail.com"
              className="leading-[8rem] font-serif text-[5rem] lg:text-[7rem] font-medium mb-7 hover:text-orange-500 transition duration-500 ease-cubic-bezier(0.22, 1, 0.36, 1)"
            >
              <motion.div
                initial={{ width: 0, left: 0 }}
                animate={{ width: inView ? "100%" : 0, left: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-[1px] bg-black"
              />
              <h1 className="my-5">Let's get in touch.</h1>
              <motion.div
                initial={{ width: 0, right: 0 }}
                animate={{ width: inView ? "100%" : 0, right: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-[1px] bg-black"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="flex md:gap-9 gap-5 flex-wrap">
          <CustomButton to="https://www.behance.net/marhansen" openInNewTab>
            Bēhance
          </CustomButton>
          <CustomButton to="https://github.com/MarHansen" openInNewTab>
            Github.
          </CustomButton>
          <CustomButton
            to="https://drive.google.com/file/d/1bOrCTuNcxIXczkfgFRDf2ktth-oNGgnU/view?usp=sharing"
            openInNewTab
          >
            CV
          </CustomButton>
          <CustomButton to="https://www.linkedin.com/in/martino-hansen-290b90221/">
            Linkedin
          </CustomButton>
          <div className="ml-auto sm:mr-[20%] w-fit text-[1.5rem] font-serif font-normal ">
            <ScrollReveal delay={0.1}>04</ScrollReveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 lg:gap-0 gap-10 grid-cols-2 mt-20 font-body text-[1.1rem]">
          <div className="flex flex-col gap-5">
            <ScrollReveal>Martino Hansen</ScrollReveal>
            <ScrollReveal>UI/UX Designer ── Web Developer</ScrollReveal>
          </div>

          <div className="flex flex-col gap-5 lg:justify-self-center justify-self-start">
            <ScrollReveal>CONTACT</ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:marhancens@gmail.com"
                  target="blank"
                  className={buttonClass2}
                >
                  Email
                </a>
                <a
                  href="https://t.me/marhansen"
                  target="blank"
                  className={buttonClass2}
                >
                  Telegram
                </a>
                <a href="" target="blank" className={buttonClass2}>
                  Whatsapp
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-5 lg:justify-self-center justify-self-start">
            <ScrollReveal>PORTOFOLIO</ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/MarHansen"
                  target="blank"
                  className={buttonClass2}
                >
                  Github
                </a>
                <a
                  href="https://www.behance.net/marhansen"
                  target="blank"
                  className={buttonClass2}
                >
                  Bēhance
                </a>
                <a
                  href="https://www.linkedin.com/in/martino-hansen-290b90221/"
                  target="blank"
                  className={buttonClass2}
                >
                  Linkedin
                </a>
                <a
                  href="https://marhansen.com/Martino Hansen_CV.pdf"
                  target="blank"
                  className={buttonClass2}
                >
                  CV
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-5 lg:justify-self-center justify-self-start">
            <ScrollReveal>NAVIGATE</ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                <Link to="/" className={buttonClass2}>
                  Home
                </Link>
                <Link to="/projects" className={buttonClass2}>
                  Projects
                </Link>
                <Link to="/about" className={buttonClass2}>
                  About
                </Link>
                <Link to="" className={buttonClass2}>
                  Blog (On Prog)
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
