import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Props = {
  text: string;
};

const ListItem = ({ text }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-[30px]">
        <IoIosCheckmarkCircle className=" text-xl mr-2" />
      </div>

      <span>{text}</span>
    </div>
  );
};

export default ListItem;
