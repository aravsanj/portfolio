import Image from "next/image";
import React, { useEffect, useState } from "react";
import Social from "./Utils/Social";

type Props = {};

const Intro = (props: Props) => {
  return (
    <section className="bg-[#FEE715] py-20">
      <div className="text-left pb-10 sm:pb-20 px-[20px] sm:px-[60px] md:px-[80px] lg:px-[170px] 2xl:px-[300px] 3xl:px-[400px]">
        <div className="flex flex-col items-center text-center gap-y-6 md:flex-row  md:justify-between md:items-start pb-32">
          <div className="flex flex-col text-[#101820]">
            <h1 className="text-3xl sm:text-4xl font-semibold md:text-left">
              Aravind Sanjeev
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-left">
              Frontend Developer
            </h2>
          </div>
          <div>
            <Social color="#101820" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-16 md:flex-row md:justify-between ">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-[250px] sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[600px] text-center md:text-left">
            Building seamless user experiences with{" "}
            <mark className="bg-[#101820] text-[#FEE715]">React</mark>
          </h3>
          <div className="w-[150px] lg:w-[180px] xl:w-[200px] lg:h-[200px]">
            <Image src="/coding.png" width={200} height={200} alt="Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
