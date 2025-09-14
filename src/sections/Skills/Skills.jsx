import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, skillColors } from "./skillsData";
import SkillsModal from "./SkillsModal";
import "./Skills.scss";
import HoverCursor from "../../components/HoverCursor/HoverCursor";

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalType, setModalType] = useState("category");

  const handleSkillClick = (skill) => {
    setSelectedCategory(skill);
    setModalType("skill");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setModalType("category");
    setIsModalOpen(false);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Skills</h2>
      </div>

      <div className="container">
        <div className="skills__content">
          {/* Render each category with its skills */}
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-section category-section--clickable"
              aria-label={`Open ${category.name} category details`}
              initial={{
                x: index % 2 === 0 ? -30 : 30,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              {/* Category Title */}
              <div className="category-title">
                {category.name.toUpperCase()}
              </div>

              {/* Skills Grid for this category */}
              <div className="skills-grid">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const skillColor = skillColors[skill.name] || "#6C757D";

                  return (
                    <HoverCursor
                      content="click"
                      key={skill.id}
                      className={`skill-item`}
                      style={{ "--skill-color": skillColor }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSkillClick(skill);
                      }}
                    >
                      <div className="skill-icon">
                        <IconComponent />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </HoverCursor>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Modal */}
      <SkillsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCategory={selectedCategory}
        type={modalType}
      />
    </section>
  );
}

export default Skills;
