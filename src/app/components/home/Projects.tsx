import React from 'react'
import Project from './Utils/Project'
import { GrProjects } from 'react-icons/gr'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-24 justify-between items-center p-4 pt-8 sm:p-8 text-[#101820] bg-[#FDFD96]">
    <div className="flex flex-col items-center gap-y-2">
      <GrProjects className="text-3xl" />

      <h3 className="text-2xl sm:text-3xl">Projects I worked on</h3>
    </div>
    <div className="flex flex-col lg:flex-row gap-y-10 gap-x-10">
      <Project
        title="The PSi App"
        description="A highly scalable and engaging voice based SaaS platform that enables scalable decision-making for civic participation, corporations, and institutions."
        link="https://thepsiapp.com/"
      />
      <Project
        title="WorxRemotely"
        description="WorxRemotely - all in one - communication, engagement, task management, and productivity app built for hybrid-remote teams."
        link="https://worxremotely.com/"
      />
    </div>
  </section>
  )
}

export default Projects