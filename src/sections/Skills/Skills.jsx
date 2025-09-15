import { useState } from "react";
import { motion } from "framer-motion";
import { skillsRow1, skillsRow2, skillColors } from "./skillsData";
import SkillsModal from "./SkillsModal";
import "./Skills.scss";

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Tech Stack</h2>
        <p className="skills__subtitle">Technologies Behind My Interfaces</p>
      </div>

      <div className="container">
        <div className="skills__content">
          {/* First Row - Slides from left */}
          <motion.div
            className="skills__row"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {skillsRow1.map((skill, index) => {
              const IconComponent = skill.icon;
              const skillColor = skillColors[skill.name] || "#6C757D";

              return (
                <div
                  key={skill.id}
                  className="skill-card"
                  style={{ "--skill-color": skillColor }}
                  onClick={() => handleSkillClick(skill)}
                >
                  <div className="skill-card__icon">
                    <IconComponent />
                  </div>
                  <span className="skill-card__name">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Second Row - Slides from right */}
          <motion.div
            className="skills__row"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {skillsRow2.map((skill, index) => {
              const IconComponent = skill.icon;
              const skillColor = skillColors[skill.name] || "#6C757D";

              return (
                <div
                  key={skill.id}
                  className="skill-card"
                  style={{ "--skill-color": skillColor }}
                  onClick={() => handleSkillClick(skill)}
                >
                  <div className="skill-card__icon">
                    <IconComponent />
                  </div>
                  <span className="skill-card__name">{skill.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Skills Modal */}
      <SkillsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedSkill={selectedSkill}
      />
    </section>
  );
}

export default Skills;
