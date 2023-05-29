import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

type Props = {
  color: string;
  size?: "normal" | "big";
};

const Social = ({ color, size }: Props) => {
  let sizeS;

  size == "normal" ? (sizeS = "base") : (sizeS = "2xl");

  return (
    <div className={`flex justify-center gap-x-2 w-full text-${color}`}>
      <a href="mailto: saravind436@gmail.com">
        <MdEmail className={`text-${sizeS}`} />
      </a>
      <a target="blank" href="https://www.linkedin.com/in/aravsanj/">
        <BsLinkedin className={`text-${sizeS}`} />
      </a>
      <a target="blank" href="https://github.com/aravsanj/">
        <BsGithub className={`text-${sizeS}`} />
      </a>
      <a target="blank" href="https://twitter.com/aravsanj">
        <BsTwitter className={`text-${sizeS}`} />
      </a>
    </div>
  );
};

export default Social;
