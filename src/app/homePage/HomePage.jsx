import "./HomePage.scss";
import HeroClientWrapper from "../../sections/Hero/HeroClientWrapper";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import * as motion from "motion/react-client";

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroClientWrapper />
      <About />
      <Skills />
      {/* <Projects />
      <Contact /> */}
    </main>
  );
};

export default HomePage;
