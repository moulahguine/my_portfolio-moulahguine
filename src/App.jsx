import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

// Import Hero directly (no lazy loading for critical above-the-fold content)
import Hero from "./sections/Hero/Hero";

// Lazy load other sections for code splitting
const About = lazy(() => import("./sections/About/About"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Contact = lazy(() => import("./sections/Contact/Contact"));

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
              <>
                {/* Hero loads immediately - no Suspense needed */}
                <Hero />
                <Suspense fallback={<SkeletonLoader type="about" />}>
                  <About />
                </Suspense>
                <Suspense fallback={<SkeletonLoader type="skills" />}>
                  <Skills />
                </Suspense>
                <Suspense fallback={<SkeletonLoader type="projects" />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<SkeletonLoader type="contact" />}>
                  <Contact />
                </Suspense>
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
