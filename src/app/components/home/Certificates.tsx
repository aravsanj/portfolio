import React from "react";
import { GrCertificate } from "react-icons/gr";

type Props = {};

const Certificates = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-14 justify-between items-center p-4  pt-8 pb-20 text-[#101820] bg-[#FDFD96]">
      <div className="flex flex-col gap-y-2 items-center">
        <GrCertificate className="text-3xl" />
        <h3 className="text-2xl sm:text-3xl">Certifications</h3>
      </div>
      <a
        href="https://drive.google.com/file/d/1QKrIGqyfM3KW5sF7mTryOz9t1u3hpmif/view"
        className="underline"
      >
        RaftLabs 6 months internship certificate
      </a>
    </section>
  );
};

export default Certificates;
