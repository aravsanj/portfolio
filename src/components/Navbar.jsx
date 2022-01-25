import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-center">
      <p>
        <a href="#technologies">Technologies</a> |{" "}
        <a href="#projects">Projects</a> | <a href="#profiles">Profiles</a> |
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </p>
    </nav>
  );
};
