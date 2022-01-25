import React from "react";

export const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  function darkModeToggle() {
    if (darkMode) {
      document.getElementsByTagName("body")[0].classList.remove("darkMode");
      setDarkMode(false);
    } else {
      document.getElementsByTagName("body")[0].classList.add("darkMode");
      setDarkMode(true);
    }
  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={() => darkModeToggle()} />
        <span className="slider round"></span>
      </label>
    </>
  );
};
