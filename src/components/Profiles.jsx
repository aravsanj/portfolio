import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const github = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
};

const linkedIn = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: 50 },
};

const twitter = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
};

const gmail = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: 50 },
};

export const Profiles = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-thin underline underline-offset-8 decoration-0">
        Profiles
      </h1>
      <div className="text-7xl sm:text-8xl md:text-9xl flex flex-col gap-y-2 sm:flex-row gap-x-2  m-0 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
        <div className="flex gap-x-2">
          <motion.a
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={github}
            href="https://github.com/aravsanj"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={linkedIn}
            href="https://www.linkedin.com/in/aravsanj/"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className="flex gap-x-2">
          <motion.a
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={twitter}
            href="https://twitter.com/aravsanj"
            target="_blank"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={gmail}
            href="mailto: saravind436@gmail.com"
            target="_blank"
          >
            <SiGmail />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
