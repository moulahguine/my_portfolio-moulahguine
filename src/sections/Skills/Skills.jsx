import React, { useState } from "react";
import { skillCategories, skillColors } from "./skillsData";
import SkillModal from "./SkillModal";
import CategoryModal from "./CategoryModal";
import "./Skills.scss";

function Skills() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (category, skill) => {
    setSelectedCategory(category);
    setSelectedSkill(skill);
    setIsSkillModalOpen(true);
  };

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category); // Debug log
    console.log("Opening category modal for:", category.name); // Debug log
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
    console.log("Modal state set to true"); // Debug log
  };

  const handleCloseSkillModal = () => {
    setIsSkillModalOpen(false);
    setSelectedCategory(null);
    setSelectedSkill(null);
  };

  const handleCloseCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Skills</h2>
      </div>
      <div className="container">
        <div className="skills__content">
          {/* Render each category with its skills */}
          {skillCategories.map((category) => (
            <div
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
                        e.stopPropagation(); // Prevent category click when clicking individual skill
                        handleSkillClick(category, skill);
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
            </div>
          ))}
        </div>
      </div>

      {/* Individual Skill Modal */}
      <SkillModal
        isOpen={isSkillModalOpen}
        onClose={handleCloseSkillModal}
        selectedCategory={selectedCategory}
        selectedSkill={selectedSkill}
      />

      {/* Category Modal */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={handleCloseCategoryModal}
        selectedCategory={selectedCategory}
      />
    </section>
  );
}

export default Skills;
