import { FaClock, FaLaptopCode, FaUsers, FaCogs } from "react-icons/fa";
import aboutImage from "../../assets/images/about-section/about-section1.webp";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import "./About.scss";
import { useState, useMemo, useCallback, Suspense, lazy } from "react";

// Lazy load ImageModal
const ImageModal = lazy(() => import("../../components/ImageModal/ImageModal"));

export default function About() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Modal handlers
  const handleImageClick = useCallback(() => {
    setIsImageOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsImageOpen(false);
  }, []);

  const quickFacts = useMemo(
    () => [
      {
        icon: <FaCogs />,
        label: "How I Work ",
        value: "JavaScript-first • Jest tests • Code reviews • performance ",
      },
      {
        icon: <FaClock />,
        label: "Experience",
        value: "3+ years in Frontend Development (React ecosystem)",
      },
      {
        icon: <FaLaptopCode />,
        label: "Projects",
        value: "Freelance & client delivery dashboards, e-commerce platforms",
      },
      {
        icon: <FaUsers />,
        label: "Collaboration",
        value:
          "Translate Figma to components • Work with designers & backend engineers",
      },
    ],
    []
  );

  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="about__header">
          <h2 className="section-title">About Me</h2>
          <p className="about__subtitle">
            Who I Am & What I Build as a React Developer
          </p>
        </div>

        <div className="about__main-content">
          <div className="about__image" onClick={handleImageClick}>
            <img
              src={aboutImage}
              alt="Mohamed Oulahguine - Frontend Developer About Section Professional"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__info">
            <div className="about__intro">
              <p>
                I'm a Frontend Developer with 3+ years of experience delivering
                SPAs, dashboards, and e-commerce platforms. I focus on
                performance, clean state management, and accessible interfaces
                that feel fast on any device.
                <br />
                <br /> I work closely with designers and backend engineers,
                turning Figma designs into components, write maintainable code,
                and review PRs to keep quality high
                <br />
                <br />
                I'm actively seeking Frontend Development opportunities and
                collaborations where I can contribute to impactful projects.{" "}
                <br />
              </p>
            </div>
            <div className="about__btn">
              <Button href="/contact" className="hire__me">
                Hire Me
              </Button>
              <Button href="/projects" className="show__projects">
                See My Work
              </Button>
            </div>
          </div>

          <div className="about__facts">
            <div className="facts-grid">
              {quickFacts.map((fact, index) => (
                <div key={index} className="fact-card">
                  <div className="fact-card-container">
                    <div className="fact-icon">{fact.icon}</div>
                    <div className="fact-content">
                      <span className="fact-label">{fact.label}</span>
                      <span className="fact-value">{fact.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <Suspense
          fallback={<div style={{ display: "none" }}>Loading modal...</div>}
        >
          <ImageModal
            isOpen={isImageOpen}
            onClose={handleCloseModal}
            imageSrc={aboutImage}
            imageAlt="Mohamed Oulahguine - Frontend Developer"
          />
        </Suspense>
      )}
    </motion.section>
  );
}
