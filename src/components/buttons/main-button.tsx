import React from "react";
import ScrollReveal from "../animation/scroll-reveal";
import { Link as RouterLink } from "react-router-dom";

interface CustomButtonProps {
  to: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.65162 0.985864L10.9859 0.985863L10.9859 8.32011M0.715508 11.2562L10.8832 1.08857"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EASE = "cubic-bezier(0.19,1,0.22,1)";

const ButtonInner = ({ children }: { children: React.ReactNode }) => {
  const label = (
    <span className="flex items-center justify-center gap-1">
      {children}
      <ArrowIcon />
    </span>
  );

  return (
    <ScrollReveal>
      <div
        className={`group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full border-[1px] border-black px-5 py-2 font-body`}
      >
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
  );
};

const CustomButton = ({ to, children, openInNewTab }: CustomButtonProps) => {
  if (openInNewTab) {
    return (
      <a
        data-cursor-size="60px"
        data-cursor-stick="#stick-item"
        data-cursor-exclusion
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <ButtonInner>{children}</ButtonInner>
      </a>
    );
  }

  return (
    <RouterLink
      data-cursor-size="60px"
      data-cursor-stick="#stick-item"
      data-cursor-exclusion
      to={to}
      className="group"
    >
      <ButtonInner>{children}</ButtonInner>
    </RouterLink>
  );
};

export default CustomButton;
