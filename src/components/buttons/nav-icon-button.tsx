import { ReactNode } from "react";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

interface NavIconButtonProps {
  onClick: () => void;
  label: string;
  ariaPressed?: boolean;
  dark?: boolean;
  children: ReactNode;
}

const NavIconButton = ({
  onClick,
  label,
  ariaPressed,
  dark = false,
  children,
}: NavIconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={ariaPressed}
      onClick={onClick}
      data-cursor-size="60px"
      data-cursor-stick="#stick-item"
      data-cursor-exclusion
      className={`group/navicon relative inline-flex items-center justify-center overflow-hidden rounded-full p-2 ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span
        aria-hidden
        style={{ transitionTimingFunction: EASE }}
        className={`pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[200%] -translate-x-1/2 translate-y-1/2 origin-center scale-0 rounded-full transition-transform duration-[900ms] group-hover/navicon:scale-[1.75] ${
          dark ? "bg-white" : "bg-black"
        }`}
      />

      <span className="relative z-10 block overflow-hidden">
        <span
          style={{ transitionTimingFunction: EASE }}
          className="block transition-transform duration-[900ms] group-hover/navicon:-translate-y-[150%]"
        >
          {children}
        </span>
        <span
          aria-hidden
          style={{ transitionTimingFunction: EASE }}
          className={`absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-[900ms] group-hover/navicon:translate-y-0 ${
            dark ? "text-black" : "text-white"
          }`}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default NavIconButton;
