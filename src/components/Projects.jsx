import React, { useEffect } from "react";
import { ImCart } from "react-icons/im";
import { SiReact, SiRedux, SiMaterialui } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const google = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
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
            <ImCart className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Ecommerce</h2>
          </div>
          <ul className="text-left h-2/5 w-3/5 mx-auto">
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiReact className="inline mx-2" />
              React{" "}
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiRedux className="inline mx-2" />
              Redux
            </li>
            <li>
              <FaCheck className="text-green-500 inline" />
              <SiMaterialui className="inline mx-2" />
              MUI 5
            </li>
          </ul>
          <div className="flex justify-center mt-8 gap-x-3">
            <a
              href="https://ecommerce-mock.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-800 rounded px-6 py-1"
            >
              Demo
            </a>
            <a
              href="https://github.com/aravsanj/Ecommerce/"
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
