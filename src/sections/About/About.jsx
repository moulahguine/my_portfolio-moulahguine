import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaUsers,
  FaMagic,
} from "react-icons/fa";
import { MdOutlineSchool, MdOutlineWork } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import "./About.scss";
import aboutImage from "../../assets/images/about-section/about-img.jpg";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing clear, maintainable, and scalable code for long-term project success.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description:
        "Finding effective solutions to technical challenges with a logical approach.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description:
        "Building applications that load quickly and run smoothly on any device.",
    },
    {
      icon: <FaHeart />,
      title: "User-Focused",
      description:
        "Designing interfaces that are intuitive, accessible, and user-friendly.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description:
        "Working effectively with designers, developers, and stakeholders to deliver results.",
    },
    {
      icon: <FaMagic />,
      title: "Continuous Improvement",
      description:
        "Keeping up with new technologies to create modern, high-quality solutions.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </motion.div>

        <div className="about__content">
          <div className="about__main">
            <motion.div
              className="about__image"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-container">
                <div className="image-placeholder">
                  <img src={aboutImage} alt="" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about__text"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Who I Am 🤔</h3>

              <p>
                Frontend Developer who creates <strong>responsive</strong>,
                <strong> high-performance websites</strong> and{" "}
                <strong>web applications</strong>. Skilled in{" "}
                <strong>React</strong>, JavaScript,{" "}
                <strong>Tailwind CSS</strong>, and HTML, I build clean, reusable
                components and write maintainable code. I deliver pixel-perfect
                designs, smooth user experiences, and solutions that are
                optimized for speed and scalability.
              </p>

              <div className="about__journey">
                <motion.div
                  className="journey-item"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <MdOutlineSchool className="journey-icon" />
                  <div className="journey-content">
                    <h4>Education</h4>
                    <p>
                      Software Engineering Student specializing in Web
                      Development
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="journey-item"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <MdOutlineWork className="journey-icon" />
                  <div className="journey-content">
                    <h4>Experience</h4>
                    <p>3+ years building web applications</p>
                  </div>
                </motion.div>

                <motion.div
                  className="journey-item"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <BiTargetLock className="journey-icon" />
                  <div className="journey-content">
                    <h4>Focus</h4>
                    <p>Frontend Development</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__highlights"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
