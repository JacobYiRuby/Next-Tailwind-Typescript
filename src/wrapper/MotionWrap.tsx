import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component: FunctionComponent, className: string = "section-container") =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
