import React from "react";
import { ReactComponent as Profile } from "../svgs/aravind.svg";

const Photo = ({ darkMode }) => (
  <Profile fill={darkMode ? "#000" : "#6a3334"} />
);

export default Photo;
