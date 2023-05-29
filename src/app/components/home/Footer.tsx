import React from "react";
import Social from "./Utils/Social";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#101820] py-10 text-white text-center">
      <p className="text-sm mb-2">© 2023 Aravind Sanjeev</p>
      <Social color="white" size="normal" />
    </footer>
  );
};

export default Footer;
