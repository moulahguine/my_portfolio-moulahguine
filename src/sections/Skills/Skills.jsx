import React, { useState } from "react";
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setModalType("category");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setModalType("category");
    setIsModalOpen(false);
  };

  return (
    <section className="skills" id="skills" path="/skills">
      <div className="skills__header">
        <h2 className="skills__title">Skills</h2>
      </div>

      <div className="container">
        <div className="skills__content">
          {/* Render each category with its skills */}
          {skillCategories.map((category) => (
            <HoverCursor
              content="click"
              key={category.id}
              className="category-section category-section--clickable"
              onClick={() => handleCategoryClick(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCategoryClick(category);
                }
              }}
              aria-label={`Open ${category.name} category details`}
            >
              {/* Category Title */}
              <div className="category-title">
                {category.name.toUpperCase()}
                <span className="category-title__arrow">→</span>
              </div>

              {/* Skills Grid for this category */}
              <div className="skills-grid">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const skillColor = skillColors[skill.name] || "#6C757D";

                  return (
                    <div
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
                    </div>
                  );
                })}
              </div>
            </HoverCursor>
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
