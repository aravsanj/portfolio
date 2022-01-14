import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Profiles } from "./components/Profiles";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="select-none scroll-smooth lg:snap-y lg:snap-mandatory overflow-y-scroll  h-screen w-screen text-white bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] dark:bg-gradient-to-r dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]">
        <section id="hero" className="min-h-screen p-5 snap-start">
          <div className></div>
          <div className="">
            <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </section>
        <section
          id="technologies"
          className="min-h-screen p-5 relative lg:snap-start"
        >
          <Technologies />
        </section>
        <section
          id="projects"
          className="min-h-screen p-5 relative lg:snap-start"
        >
          <Projects />
        </section>
        <section
          id="profiles"
          className="min-h-screen p-5 relative lg:snap-start"
        >
          <Profiles />
        </section>
      </div>
    </div>
  );
};

export default App;
