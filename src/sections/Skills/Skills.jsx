"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "./skillsData";
// import SkillsModal from "./SkillsModal";
import "./Skills.scss";

function Skills() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedSkill, setSelectedSkill] = useState(null);

  // const handleSkillClick = (skill) => {
  //   setSelectedSkill(skill);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedSkill(null);
  //   setIsModalOpen(false);
  // };

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Tech Stack</h2>
        <p className="skills__subtitle">
          React, JavaScript & Modern Technologies Behind My Interfaces
        </p>
      </div>

      <div className="container">
        <div className="skills__content">
          <motion.div
            className="skills__row"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="skill-card"
                style={
                  {
                    //   "--skill-color": skillColors[skill.name] || "#66309a",
                  }
                }
              >
                <div className="skill-card__icon">{/* <skill.icon /> */}</div>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </motion.div>
          {/* 
          <motion.div
            className="skills__row"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            {skillsRow2.map((skill) => (
              <div
                key={skill.id}
                className="skill-card"
                style={{
                  "--skill-color": skillColors[skill.name] || "#6C757D",
                }}
              >
                <div className="skill-card__icon">
                  <skill.icon />
                </div>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="skills__row"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            {skillsRow3.map((skill) => (
              <div
                key={skill.id}
                className="skill-card"
                style={{
                  "--skill-color": skillColors[skill.name] || "#6C757D",
                }}
              >
                <div className="skill-card__icon">
                  <skill.icon />
                </div>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
