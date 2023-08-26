import ScrollReveal from "../scroll-reveal";
import AnimatedTabs from "../animated-tab";

function Expertise() {
  return (
    <>
      <section className="mb-12 sm:mt-[7rem] mt-12 overflow-clip text-black">
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

        <AnimatedTabs></AnimatedTabs>

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
