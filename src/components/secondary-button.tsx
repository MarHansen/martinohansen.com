import ScrollReveal from "./scroll-reveal";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

interface CustomButtonProps {
  to: string;
}

const SecondaryButton = ({ to }: CustomButtonProps) => {
  return (
    <RouterLink
      data-cursor-size="80px"
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
          className="flex items-center justify-content-center gap-1 group-hover:bg-black group-hover:text-white font-body px-6 py-4 border-[1px] rounded-full border-black transition-all duration-300 ease-cubic-bezier[0.16,1,0.3,1]"
        >
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5729 1L19 7.5L12.5729 14M1 7.5L18.82 7.5"
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

export default SecondaryButton;
