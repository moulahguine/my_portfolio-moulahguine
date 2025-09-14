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

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <main>
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
    </BrowserRouter>
  );
}
