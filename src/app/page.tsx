import Intro from "./components/home/Intro";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Work from "./components/home/Work";
import Certificates from "./components/home/Certificates";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
      <Work />
      <Certificates />
      <Footer />
    </main>
  );
}
