import React, { useEffect } from "react";
import { BsCodeSlash } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRobotframework,
  SiBootstrap,
  SiTailwindcss,
  SiGatsby,
  SiMaterialui,
} from "react-icons/si";
import { ImLibrary } from "react-icons/im";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const languages = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
};

const libraries = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: 50 },
};

const frameworks = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -50 },
};

export const Technologies = () => {
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
        Technologies
      </h1>
      <div className="mt-10 flex flex-col gap-y-10 items-center lg:flex-row lg:justify-between lg:gap-x-2 xl:gap-x-10 lg:m-0 lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-2/4 lg:-translate-x-2/4">
        <motion.div
          ref={ref}
          animate={controls}
          initial={window.innerWidth > 1024 ? "hidden" : ""}
          variants={languages}
          className="border-2 shadow-xl w-80 h-80 p-5 pb-20 rounded-lg flex flex-col justify-between"
        >
          <div className="">
            <BsCodeSlash className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Languages</h2>
          </div>
          <ul className="text-left h-2/5 w-2/5 mx-auto">
            <li>
              <SiHtml5 className="inline mx-2" />
              HTML
            </li>
            <li>
              <SiCss3 className="inline mx-2" />
              CSS
            </li>
            <li>
              <SiJavascript className="inline mx-2" />
              JavaScript
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={window.innerWidth > 1024 ? "hidden" : ""}
          variants={libraries}
          className="border-2 shadow-xl w-80 h-80 p-5 pb-20 rounded-lg flex flex-col justify-between"
        >
          <div className="">
            <ImLibrary className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Libraries</h2>
          </div>
          <ul className="text-left h-2/5 w-2/5 mx-auto">
            <li>
              <SiReact className="inline mx-2" />
              React
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={window.innerWidth > 1024 ? "hidden" : ""}
          variants={frameworks}
          className="border-2 shadow-xl w-80 h-80 p-5 pb-20 rounded-lg flex flex-col justify-center"
        >
          <div className="">
            <SiRobotframework className="text-5xl mx-auto" />
            <h2 className="text-3xl mb-10">Frameworks</h2>
          </div>
          <ul className="text-left mx-auto">
            <li>
              <SiBootstrap className="inline mx-2" />
              Bootstrap
            </li>
            <li>
              <SiTailwindcss className="inline mx-2" />
              Tailwind
            </li>
            <li>
              <SiGatsby className="inline mx-2" />
              Gatsby
            </li>
            <li>
              <SiMaterialui className="inline mx-2" />
              MUI 5
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
