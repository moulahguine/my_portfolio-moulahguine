import "./Home.scss";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Experiences from "../../sections/Experiences/Experiences";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import * as motion from "motion/react-client";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences mode="preview" />
      <Contact />
    </div>
  );
};

export default HomePage;
