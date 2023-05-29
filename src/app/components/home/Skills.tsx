import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiBootstrap,
  SiWebflow,
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BsGit } from "react-icons/bs";


type Props = {}

const Skills = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-24 justify-between items-center p-4 pt-8 sm:p-8 text-[#101820] bg-[#FDFD96]">
    <div className="flex flex-col gap-y-10 sm:gap-y-12 justify-between items-center p-8 h-full">
      <div className="flex flex-col items-center gap-y-2">
        <GiSkills className="text-3xl" />
        <h3 className="text-2xl sm:text-3xl">My skills</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 gap-x-10 text-[#101820] p-10 rounded-lg">
        <FaReact className="text-2xl sm:text-3xl" />
        <SiTypescript className="text-2xl sm:text-3xl" />
        <SiJavascript className="text-2xl sm:text-3xl" />
        <SiCss3 className="text-2xl sm:text-3xl" />
        <SiHtml5 className="text-2xl sm:text-3xl" />
        <BsGit className="text-2xl sm:text-3xl" />
        <SiFigma className="text-2xl sm:text-3xl" />
        <SiBootstrap className="text-2xl sm:text-3xl" />
        <SiWebflow className="text-2xl sm:text-3xl" />
      </div>
    </div>
  </section>
  )
}

export default Skills