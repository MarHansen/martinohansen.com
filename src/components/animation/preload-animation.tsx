import { motion } from "framer-motion";

const PreloadAnimation = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#2B2724",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: "-100%" }} // Slide left on exit
    >
      <motion.div
        style={{
          width: "100%",
          height: "8px",
          background: "#3498db",
        }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "linear" }} // Adjust the duration as needed
      />
    </motion.div>
  );
};

export default PreloadAnimation;
