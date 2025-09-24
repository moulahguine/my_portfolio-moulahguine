// import { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { skillsRow1, skillsRow2, skillColors } from "./skillsData";
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

  // Memoize skill rendering logic to prevent unnecessary re-renders
  const renderSkillCard = useMemo(
    () => (skill) => {
      const IconComponent = skill.icon;
      const skillColor = skillColors[skill.name] || "#6C757D";

      return (
        <div
          key={skill.id}
          className="skill-card"
          style={{ "--skill-color": skillColor }}
        >
          <div className="skill-card__icon">
            <IconComponent />
          </div>
          <span className="skill-card__name">{skill.name}</span>
        </div>
      );
    },
    []
  );

  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="skills__header">
        <h2 className="skills__title">Tech Stack</h2>
        <p className="skills__subtitle">
          React, JavaScript & Modern Technologies Behind My Interfaces
        </p>
      </div>

      <div className="container">
        <div className="skills__content">
          <div className="skills__row">{skillsRow1.map(renderSkillCard)}</div>

          <div className="skills__row">{skillsRow2.map(renderSkillCard)}</div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
