import { FaClock, FaLaptopCode, FaUsers, FaCogs } from "react-icons/fa";
import aboutImage from "../../assets/images/about-section/about-section1.jpg";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import "./About.scss";

export default function About() {
  const quickFacts = [
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
            initial={{ x: -50, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <img src={aboutImage} alt="personality img about section" />
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
                I’m a Frontend Developer with 3+ years of experience delivering
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
            </motion.div>
            <div className="about__btn">
              <Button href="#contact" className="hire__me">
                Hire Me
              </Button>
              <Button href="#projects" className="show__projects">
                See My Work
              </Button>
            </div>
          </div>
          {/* Quick Facts Grid */}
          <motion.div
            className="about__facts"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="facts-grid">
              {quickFacts.map((fact, index) => (
                <motion.div key={index} className="fact-card">
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
