import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <main id="main-content">
        <Routes>
          <Route
            path="/*"
            element={
              <Suspense fallback={<SkeletonLoader type="hero" />}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
      <MouseFollower size={15} color="#2d3748" speed={0.3} enabled={true} />
    </BrowserRouter>
  );
}
