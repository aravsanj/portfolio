import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const arrow = {
  visible: {
    scale: 1.8,
    rotate: 10,
    x: -10,
    y: 10,
    transition: { duration: 1, yoyo: Infinity },
  },
  hidden: { scale: 1 },
};

export const Arrow = ({ darkMode, setDarkMode }) => {
  const [arrowView, setArrowView] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  function arrowDown() {
    document.getElementById("technologies").scrollIntoView();
    setArrowView(false);
    setDarkMode(true);
  }

  return (
    <div className="w-1 h-1">
      <AnimatePresence>
        {arrowView && (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={arrow}
            className="cursor-pointer"
            exit={{ scale: 0 }}
            onClick={() => arrowDown()}
            id="arrow"
          >
            <i className="border-solid bg-fuchsia-900 border-white border-r-4 border-b-4 border-t-0 border-l-0 p-4 rounded-lg inline-block">
              💥
            </i>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
