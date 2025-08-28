import {
  FaClock,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaCogs,
} from "react-icons/fa";
import "./About.scss";
import aboutImage from "../../assets/images/about-section/about-section2.jpg";
import { motion } from "framer-motion";
import { acesFilmicToneMapping } from "three/tsl";

export default function About() {
  const quickFacts = [
    {
      icon: <FaCogs />,
      label: "How I Work ",
      value:
        "JavaScript-first • Jest tests • Code reviews • CI/CD & performance budgets",
    },
    {
      icon: <FaClock />,
      label: "Experience",
      value: "3+ years in Frontend Development (React ecosystem)",
    },
    {
      icon: <FaLaptopCode />,
      label: "Projects",
      value: "Freelance & client delivery — dashboards, e-commerce platforms",
    },
    {
      icon: <FaUsers />,
      label: "Collaboration",
      value:
        "Translate Figma to components • Work with designers & backend engineers",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Header */}
        <motion.div
          className="about__header"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        {/* Main Content */}
        <div className="about__main-content">
          {/* Left Column - Profile Image */}
          <motion.div
            className="about__image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={aboutImage}
              alt="personality image in about section"
              className={`image visible`}
            />
          </motion.div>
          {/* Right Column - Information */}
          <div className="about__info">
            {/* Intro Paragraph */}
            <motion.div
              className="about__intro"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I’m a <strong>Frontend Developer</strong> with
                <strong> 3+ years of experience</strong> delivering
                <strong> SPAs</strong>, <strong>dashboards</strong>, and
                <strong> e-commerce platforms</strong>. I focus on
                <strong> performance</strong>,
                <strong> clean state management</strong>, and
                <strong> accessible interfaces</strong> that feel fast on any
                device.
                <br />
                <br /> I work closely with <strong>designers</strong> and{" "}
                <strong>backend engineers</strong>, turning Figma designs into
                components, write <strong>maintainable code</strong>, and{" "}
                <strong>
                  review PRs to keep quality high
                  <br />
                </strong>
                <br />
                I'm actively seeking{" "}
                <strong>Frontend Development opportunities </strong>
                and collaborations where I can contribute to impactful projects.{" "}
                <br />
                <strong style={{ textTransform: "uppercase" }}>
                  let's talk
                </strong>
              </p>
            </motion.div>
          </div>
          {/* Quick Facts Grid */}
          <motion.div
            className="about__facts"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="facts-grid">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="fact-card"
                  whileHover={{ scale: 1.2, transition: 0.3 }}
                >
                  <div className="fact-icon">{fact.icon}</div>
                  <div className="fact-content">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
