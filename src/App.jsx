import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import MouseFollower from "./components/MouseFollower/MouseFollower";

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#primary-navigation" className="skip-link">
        Skip to navigation
      </a>

      <Background />
      <Header />
      <main id="main-content">
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
      <MouseFollower size={15} color="#2d3748" speed={0.3} enabled={true} />
    </BrowserRouter>
  );
}
