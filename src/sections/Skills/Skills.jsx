import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiSass,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: FaHtml5,
      level: "Advanced",
      color: "#E34F26",
      description: "Semantic markup and accessibility",
    },
    {
      id: 2,
      name: "CSS",
      icon: FaCss3Alt,
      level: "Advanced",
      color: "#1572B6",
      description: "Modern layouts and animations",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: FaJs,
      level: "Advanced",
      color: "#F7DF1E",
      description: "ES6+ and modern patterns",
    },
    {
      id: 4,
      name: "Sass",
      icon: SiSass,
      level: "Proficient",
      color: "#3178C6",
      description: "Type safety and interfaces",
    },
    {
      id: 5,
      name: "React",
      icon: FaReact,
      level: "Advanced",
      color: "#61DAFB",
      description: "Hooks, context, and performance",
    },
    {
      id: 6,
      name: "Next.js",
      icon: SiNextdotjs,
      level: "Proficient",
      color: "#000000",
      description: "SSR, routing, and optimization",
    },
    {
      id: 7,
      name: "Framer Motion",
      icon: SiFramer,
      level: "Proficient",
      color: "#0055FF",
      description: "Smooth animations and transitions",
    },
    {
      id: 8,
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: "Proficient",
      color: "#06B6D4",
      description: "Utility-first styling",
    },
    {
      id: 9,
      name: "Vite",
      icon: SiVite,
      level: "Proficient",
      color: "#646CFF",
      description: "Fast build tooling",
    },
    {
      id: 10,
      name: "Git/GitHub",
      icon: FaGithub,
      level: "Advanced",
      color: "#181717",
      description: "Version control and collaboration",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleCardClick = (skillName) => {
    console.log(`Clicked on ${skillName}`);
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills__title">Skills & Technologies</h2>
          <p className="skills__subtitle">
            Frontend technologies I work with daily
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.2 },
              }}
              onClick={() => handleCardClick(skill.name)}
              style={{
                "--skill-color": skill.color,
              }}
            >
              <div className="skill-card__icon">
                <skill.icon />
              </div>
              <div className="skill-card__content">
                <h3 className="skill-card__name">{skill.name}</h3>
                <p className="skill-card__description">{skill.description}</p>
                <span className="skill-card__level">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
