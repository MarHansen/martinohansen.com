import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCallback } from "react";
import React from "react";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

const ReturnButton = React.memo(() => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const label = <span className="block px-1">Return</span>;

  return (
    <div className="mt-24">
      <motion.div
        className="w-fit"
        whileHover={{ x: 25 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <button
          data-cursor-size="80px"
          data-cursor-stick="#stick-item"
          data-cursor-exclusion
          onClick={handleClick}
          className="group my-10 w-fit flex items-center gap-7 font-foot font-medium sm:text-[3rem] text-[2.5rem]"
        >
          <svg
            width="53"
            height="38"
            viewBox="0 0 53 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:max-w-full max-w-[2.5rem]"
          >
            <path
              d="M19.21 37L0.999999 19L19.21 0.999999M52 19L1.51 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-1">
            <span
              aria-hidden
              style={{ transitionTimingFunction: EASE }}
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[150%] -translate-x-1/2 translate-y-1/2 origin-center scale-0 rounded-full bg-black transition-transform duration-[900ms] group-hover:scale-[1.35]"
            />
            <span className="relative z-10 block overflow-hidden">
              <span
                style={{ transitionTimingFunction: EASE }}
                className="block transition-transform duration-[900ms] group-hover:-translate-y-[140%]"
              >
                {label}
              </span>
              <span
                style={{ transitionTimingFunction: EASE }}
                className="absolute inset-0 translate-y-[140%] text-white transition-transform duration-[900ms] group-hover:translate-y-0"
              >
                {label}
              </span>
            </span>
          </span>
        </button>
      </motion.div>
    </div>
  );
});

export default ReturnButton;
