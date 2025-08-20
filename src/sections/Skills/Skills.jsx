import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiCodepen,
  SiVite,
  SiFramer,
} from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.scss";

export default function Skills() {
  const Skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Sass", icon: <FaSass />, color: "#CC6699" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Material-UI", icon: <SiMui />, color: "#0081CB" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "CodePen", icon: <SiCodepen />, color: "#000000" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        {/* Header */}
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills__header"
        >
          <h2 className="section-title">Skills </h2>
        </motion.header>
        <motion.main
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills__section"
        >
          <div className="skills__grid">
            {Skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="skill-item"
              >
                <motion.div
                  variants={hoverVariants}
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </motion.div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.main>
      </div>
    </section>
  );
}
