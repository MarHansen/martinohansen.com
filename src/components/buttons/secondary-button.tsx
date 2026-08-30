import ScrollReveal from "../animation/scroll-reveal";
import { Link as RouterLink } from "react-router-dom";

interface CustomButtonProps {
  to: string;
}

const ArrowIcon = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5729 1L19 7.5L12.5729 14M1 7.5L18.82 7.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EASE = "cubic-bezier(0.19,1,0.22,1)";

const SecondaryButton = ({ to }: CustomButtonProps) => {
  const label = (
    <span className="flex items-center justify-center gap-1">
      <ArrowIcon />
    </span>
  );

  return (
    <RouterLink
      data-cursor-size="80px"
      data-cursor-stick="#stick-item"
      data-cursor-exclusion
      to={to}
      className="group"
    >
      <ScrollReveal>
        <div className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full border-[1px] border-black px-6 py-4 font-body">
          <span
            aria-hidden
            style={{ transitionTimingFunction: EASE }}
            className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[150%] -translate-x-1/2 translate-y-1/2 origin-center scale-0 rounded-full bg-black transition-transform duration-[900ms] group-hover/btn:scale-[1.35]"
          />

          <span className="relative z-10 block overflow-hidden">
            <span
              style={{ transitionTimingFunction: EASE }}
              className="block transition-transform duration-[900ms] group-hover/btn:-translate-y-[140%]"
            >
              {label}
            </span>
            <span
              style={{ transitionTimingFunction: EASE }}
              className="absolute inset-0 translate-y-[140%] text-white transition-transform duration-[900ms] group-hover/btn:translate-y-0"
            >
              {label}
            </span>
          </span>
        </div>
      </ScrollReveal>
    </RouterLink>
  );
};

export default SecondaryButton;
