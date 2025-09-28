import React from "react";
import { motion } from "framer-motion";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.main>
  );
};

export default HomePage;
