import React from "react";
import ScrollReveal from "./scroll-reveal";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

interface CustomButtonProps {
  to: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}

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
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{
              duration: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center justify-content-center gap-1 group-hover:bg-black group-hover:text-white font-body px-5 py-2 border-[1px] rounded-full border-black transition-all duration-300 ease-cubic-bezier[0.16,1,0.3,1]"
          >
            {children}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.65162 0.985864L10.9859 0.985863L10.9859 8.32011M0.715508 11.2562L10.8832 1.08857"
                stroke="#2B2724"
                className="group-hover:stroke-[#EDE8E2]"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.div>
        </ScrollReveal>
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
      <ScrollReveal>
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{
            duration: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-content-center gap-1 group-hover:bg-black group-hover:text-white font-body px-5 py-2 border-[1px] rounded-full border-black transition-all duration-300 ease-cubic-bezier[0.16,1,0.3,1]"
        >
          {children}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.65162 0.985864L10.9859 0.985863L10.9859 8.32011M0.715508 11.2562L10.8832 1.08857"
              stroke="#2B2724"
              className="group-hover:stroke-[#EDE8E2]"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
      </ScrollReveal>
    </RouterLink>
  );
};

export default CustomButton;
