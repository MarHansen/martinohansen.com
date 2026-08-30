import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";

const FloatingBackButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-4 left-4 z-[90] sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10"
    >
      <Link
        to="/"
        aria-label="Back to home"
        data-cursor-size="120px"
        data-cursor-stick="#stick-item"
        data-cursor-exclusion
        className="group relative grid h-[80px] w-[80px] place-items-center sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ transformOrigin: "50% 50%", color: "var(--color-ink)" }}
          className="pointer-events-none absolute inset-0"
        >
          <ReactCurvedText
            width={120}
            height={120}
            cx={60}
            cy={60}
            rx={43}
            ry={43}
            startOffset={0}
            reversed
            text="PROJECT SHOWCASE ✦ EST 2022 ✦ "
            textProps={{
              style: {
                fill: "currentColor",
                fontSize: "10.5px",
                letterSpacing: "2.75px",
              },
            }}
            svgProps={{ viewBox: "0 0 120 120", width: "100%", height: "100%" }}
          />
        </motion.div>

        <span
          style={{
            backgroundColor: "var(--color-ink)",
            color: "var(--color-paper)",
          }}
          className="relative grid aspect-square w-[44%] place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-90"
        >
          <svg
            viewBox="0 0 53 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[46%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5"
          >
            <path
              d="M19.21 37L0.999999 19L19.21 0.999999M52 19L1.51 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
};

export default FloatingBackButton;
