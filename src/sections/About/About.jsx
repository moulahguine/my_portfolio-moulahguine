import { FaClock, FaLaptopCode, FaUsers, FaCogs } from "react-icons/fa";
import aboutImage from "../../assets/images/about-section/about-section1.webp";
import aboutImage200 from "../../assets/images/about-section/about-section1_200.webp";
import aboutImage300 from "../../assets/images/about-section/about-section1_300.webp";
import aboutImage400 from "../../assets/images/about-section/about-section1_400.webp";
import aboutImage500 from "../../assets/images/about-section/about-section1_500.webp";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import InteractiveText from "../../components/InteractiveText/InteractiveText";
import projectsData from "../Projects/projectData";
import "./About.scss";
import { useState, useMemo, useCallback, Suspense, lazy } from "react";

// Lazy load ImageModal
const ImageModal = lazy(() => import("../../components/ImageModal/ImageModal"));

export default function About() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Project mapping for interactive text
  const projectMapping = {
    spas: projectsData[3],
    dashboards: projectsData[0],
    ecommerce: projectsData[1],
  };

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
    <>
      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="about__header">
            <h2 className="section-title">About Me</h2>
            <p className="about__subtitle">
              Who I Am & What I Build as a React Developer
            </p>
          </div>

          <div className="about__main-content">
            <motion.div
              className="about__image"
              onClick={handleImageClick}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ position: "relative" }}
            >
              <img
                src={aboutImage}
                srcSet={`${aboutImage200} 200w, ${aboutImage300} 300w, ${aboutImage400} 400w, ${aboutImage500} 500w`}
                sizes="(max-width: 778px) 100vw, 350px"
                alt="Mohamed Oulahguine - Frontend Developer About Section Professional"
                loading="lazy"
                decoding="async"
                width="350"
                height="350"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>

            <motion.div
              className="about__info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="about__intro">
                <p>
                  I'm a Frontend Developer with 3+ years of experience
                  delivering{" "}
                  <InteractiveText
                    text="SPAs"
                    projectData={projectMapping.spas}
                  />
                  ,{" "}
                  <InteractiveText
                    text="dashboards"
                    projectData={projectMapping.dashboards}
                  />
                  , and{" "}
                  <InteractiveText
                    text="e-commerce "
                    projectData={projectMapping.ecommerce}
                  />
                  platforms . I focus on performance, clean state management,
                  and accessible interfaces that feel fast on any device.
                  <br />
                  <br /> I work closely with designers and backend engineers,
                  turning Figma designs into components, write maintainable
                  code, and review PRs to keep quality high
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
                <Button href="#projects" className="show__projects">
                  See My Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="about__facts"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <div className="facts-grid">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="fact-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    <div className="fact-card-container">
                      <div className="fact-icon">{fact.icon}</div>
                      <div className="fact-content">
                        <span className="fact-label">{fact.label}</span>
                        <span className="fact-value">{fact.value}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
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
    </>
  );
}
