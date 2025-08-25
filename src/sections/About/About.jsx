import { FaGraduationCap, FaClock, FaLaptopCode } from "react-icons/fa";
import "./About.scss";
import aboutImage from "../../assets/images/about-section/about-section2.jpg";
import { motion } from "framer-motion";

export default function About() {
  const quickFacts = [
    {
      icon: <FaGraduationCap />,
      label: "Education ",
      value: "B.Sc. in Software Engineering (Year 3, expected 2027)",
    },
    {
      icon: <FaClock />,
      label: "Experience",
      value: "3+ Years Frontend Development",
    },
    {
      icon: <FaLaptopCode />,
      label: "Work",
      value: "Freelance & Projects",
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
                I’m a Frontend Developer with 3+ years of professional
                experience. Since 2019, I have delivered projects ranging from
                e-commerce platforms to dashboards. My work focuses on{" "}
                <strong>
                  clean, maintainable, and scalable front-end code
                </strong>{" "}
                using{" "}
                <strong>
                  React, JavaScript, Sass, Redux, Material UI, and Framer Motion
                </strong>
                . I optimize interfaces for{" "}
                <strong>performance and responsiveness</strong> across devices.
                <br />
                <br />I collaborate closely with designers and developers to
                translate concepts into fully functional applications. I pay
                attention to{" "}
                <strong>
                  clear design, easy-to-use interfaces, and consistent behavior
                </strong>{" "}
                in every project, ensuring that each interface is both
                functional and intuitive.
                <br />
                <br />
                I’m actively seeking{" "}
                <strong>Frontend Developer opportunities</strong> where I can
                contribute to useful projects. Please feel free to{" "}
                <strong>contact me</strong> if you’d like to discuss a role or
                collaboration.
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
