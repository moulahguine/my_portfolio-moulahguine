import React, { useState, useEffect } from "react";
import { Modal } from "../../../components";
import { skillCategories, skillColors } from "../skillsData";
import "./SkillsModal.scss";

function SkillsModal({ isOpen, onClose, selectedCategory, type = "category" }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Set initial selected skill when modal opens
  useEffect(() => {
    if (!isOpen || !selectedCategory) return;

    if (type === "category") {
      const categoryData = skillCategories.find(
        (cat) => cat.id === selectedCategory.id
      );

      if (categoryData && categoryData.skills.length > 0) {
        setSelectedSkill(categoryData.skills[0]);
      }
    }

    if (type === "skill") {
      // directly select the passed skill
      setSelectedSkill(selectedCategory);
    }
  }, [isOpen, selectedCategory, type]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  if (!selectedCategory) return null;

  // Always resolve categoryData (works for both category & skill types)
  const categoryData =
    type === "category"
      ? skillCategories.find((cat) => cat.id === selectedCategory.id)
      : skillCategories.find((cat) =>
          cat.skills.some((s) => s.id === selectedCategory.id)
        );

  if (!categoryData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={categoryData.name}
      size="xlarge"
    >
      <div className="skills-modal__content">
        {/* Left Side - Skills List */}
        <div className="skills-modal__skills-panel">
          <h3 className="skills-modal__skills-panel-title">
            Skills in this category
          </h3>
          <div className="skills-modal__skills-panel-list">
            {categoryData.skills.map((skill) => {
              const IconComponent = skill.icon;
              const skillColor = skillColors[skill.name] || "#6C757D";
              const isSelected = selectedSkill && skill.id === selectedSkill.id;

              return (
                <div
                  key={skill.id}
                  className={`skills-modal__skill-item ${
                    isSelected ? "skills-modal__skill-item--selected" : ""
                  }`}
                  onClick={() => handleSkillClick(skill)}
                  style={{ "--skill-color": skillColor }}
                >
                  <div className="skills-modal__skill-item-icon">
                    <IconComponent
                      style={{ color: skillColor, fontSize: "20px" }}
                    />
                  </div>
                  <span className="skills-modal__skill-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Blog Content */}
        <div className="skills-modal__blog-panel">
          {selectedSkill ? (
            <div>
              <div className="skills-modal__skill-header">
                <div
                  className="skills-modal__skill-header-icon"
                  style={{
                    backgroundColor: `${skillColors[selectedSkill.name]}20`,
                  }}
                >
                  {(() => {
                    const IconComponent = selectedSkill.icon;
                    return (
                      <IconComponent
                        style={{
                          color: skillColors[selectedSkill.name],
                          fontSize: "28px",
                        }}
                      />
                    );
                  })()}
                </div>
                <div className="skills-modal__skill-header-content">
                  <h3>{selectedSkill.name}</h3>
                  <p>My learning journey</p>
                </div>
              </div>

              <div className="skills-modal__blog-content">
                <p>{selectedSkill.blog}</p>
              </div>
            </div>
          ) : (
            <div className="skills-modal__empty-state">
              <div className="skills-modal__empty-state-content">
                <div className="icon">💡</div>
                <p>Select a skill to read about my experience</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default SkillsModal;
