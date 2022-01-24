import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <p>
        <a href="#technologies">Technologies</a> |{" "}
        <a href="#projects">Projects</a> | <a href="#profiles">Profiles</a>
      </p>
    </nav>
  );
};
