import React, { useEffect } from "react";
import { BsGoogle } from "react-icons/bs";
import { SiReact, SiFastapi, SiTailwindcss } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { CgProfile, CgMenuMotion } from "react-icons/cg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const google = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
};

const portfolio = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: 50 },
};

export const Projects = () => {
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
        Projects
      </h1>
      <div className="mt-10 flex flex-col gap-y-10 items-center lg:flex-row lg:justify-between lg:gap-x-2 xl:gap-x-10 lg:m-0 lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-2/4 lg:-translate-x-2/4">
        <motion.div
          ref={ref}
          animate={controls}
          initial={window.innerWidth > 1024 ? "hidden" : ""}
          variants={google}
          className="border-2 shadow-xl w-80 h-80 p-5 pb-20 rounded-lg flex flex-col justify-between"
        >
          <div className="">
            <BsGoogle className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Google Mock</h2>
          </div>
          <ul className="text-left h-2/5 w-3/5 mx-auto">
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiReact className="inline mx-2" />
              React{" "}
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiTailwindcss className="inline mx-2" />
              Tailwind
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiFastapi className="inline mx-2" />
              Raipd API
            </li>
          </ul>
          <div className="flex justify-center mt-8 gap-x-3">
            <a
              href="https://google-mock.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-800 rounded px-6 py-1"
            >
              Demo
            </a>
            <a
              href="https://google-mock.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-800 rounded px-6 py-1"
            >
              Code
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={window.innerWidth > 1024 ? "hidden" : ""}
          variants={portfolio}
          className="border-2 shadow-xl w-80 h-80 p-5 pb-20 rounded-lg flex flex-col justify-between"
        >
          <div className="">
            <CgProfile className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Portfolio Site</h2>
          </div>
          <ul className="text-left h-2/5 w-3/5 mx-auto">
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiReact className="inline mx-2" />
              React{" "}
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiTailwindcss className="inline mx-2" />
              Tailwind
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <CgMenuMotion className="inline mx-2" />
              Framer Motion
            </li>
          </ul>
          <div className="flex justify-center mt-8 gap-x-3">
            <a
              href="https://aravindsanjeev.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-800 rounded px-6 py-1"
            >
              Demo
            </a>
            <a
              href="https://aravindsanjeev.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-800 rounded px-6 py-1"
            >
              Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
