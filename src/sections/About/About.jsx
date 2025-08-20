import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaUsers,
  FaMagic,
} from "react-icons/fa";
import "./About.scss";
import aboutImage from "../../assets/images/about-section/about-img.jpg";
import { motion } from "framer-motion";

export default function About() {
  const leftProcess = [
    {
      icon: <FaCode />,
      title: "Code Development",
      description: "Building clean, maintainable code with modern frameworks",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Analyzing challenges and implementing efficient solutions",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams",
    },
  ];

  const rightProcess = [
    {
      icon: <FaRocket />,
      title: "Project Planning",
      description: "Strategic planning and architecture design",
    },
    {
      icon: <FaMagic />,
      title: "Implementation",
      description: "Bringing designs to life with precision and creativity",
    },
    {
      icon: <FaHeart />,
      title: "Quality Assurance",
      description: "Thorough testing and optimization for best performance",
    },
  ];

  const processCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="about__header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        {/* description */}
        <motion.div
          className="about__description"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>
            Frontend Developer who creates <strong>responsive</strong>,
            <strong> high-performance</strong> websites and web applications.
            Skilled in <strong>React</strong>, JavaScript,
            <strong> Tailwind CSS</strong>, and HTML, I build clean, reusable
            components and write maintainable code. I deliver pixel-perfect
            designs, smooth user experiences, and solutions that are optimized
            for speed and scalability.
          </p>
        </motion.div>
        {/* Main Content */}
        <div className="about__main-content">
          {/* Left Process Flow */}
          <motion.div
            className="process-flow left-flow"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {leftProcess.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                variants={processCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Central Image */}
          <motion.div
            className="central-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="image-background">
              <div className="image-bg">
                <img src={aboutImage} alt="Mohamed Oulahguine" />
                <div className="dropdown-menu">
                  <label>Specialization</label>
                  <div className="dropdown-content">
                    <span>Frontend Development</span>
                    <FaCode className="dropdown-icon" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Process Flow */}
          <motion.div
            className="process-flow right-flow"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {rightProcess.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                variants={processCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="connecting-arc"></div>
        <div className="experience-highlight">
          <p>3+ years building web applications</p>
        </div>
      </div>
    </section>
  );
}
