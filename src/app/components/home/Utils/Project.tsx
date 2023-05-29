import React from "react";
import { BsLink45Deg } from "react-icons/bs";


type Props = {
  title: string;
  description: string;
  link?: string;
};

const Project = ({ title, description, link }: Props) => {
  return (
    <a target="blank" href={link}>
      <div className="flex flex-col gap-y-10 bg-[#FEE715] drop-shadow-2xl outline outline-1 outline-white p-10 xsm:w-[400px] h-full">
        <h1 className="font-semibold">{title}</h1>
        <p>{description}</p>
        <BsLink45Deg className="absolute -top-2 text-2xl" />
      </div>
    </a>
  );
};

export default Project;
