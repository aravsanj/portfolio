import React, { useEffect } from "react";
import Photo from "./Photo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "./Navbar";

const photo = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: 20 },
};

const title = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: -20 },
};

export const Hero = ({ darkMode, setDarkMode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="text-center flex flex-col gap-y-9 items-center md:flex-row md:items-center m-0 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={photo}
          className="md:order-2 w-64 md:w-96 m-auto"
        >
          <Photo darkMode={darkMode} />
        </motion.div>
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={title}
          className="text-xl font-mono"
        >
          Hi, I am <b>Aravind</b>. <br /> A hobby react developer.
        </motion.h1>
      </div>
    </>
  );
};
