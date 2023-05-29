import React from "react";
import { GrUserWorker } from "react-icons/gr";
import ListItem from "./Utils/ListItem";

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-24 justify-between items-center p-8 text-[#101820] bg-[#FDFD96]">
      <div className="flex flex-col gap-y-2 items-center">
        <GrUserWorker className="text-3xl" />
        <h3 className="text-2xl sm:text-3xl">Things I did</h3>
      </div>

      <div className="flex flex-col gap-y-4">
        <ListItem text="Created end user email collection system using Mailchimp" />
        <ListItem
          text="Created a document sharing system using Google Drive, Microsoft
          Graph, and Dropbox API"
        />
        <ListItem text="Improvised voice chat experience using Agora" />
        <ListItem text="Created new designs and made several UI/UX improvements" />
      </div>
    </section>
  );
};

export default Work;
