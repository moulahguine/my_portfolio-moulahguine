"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "../../../components";
import SkillIcon from "../../sections/Skills/SkillIcon";
import { skills, skillColors } from "../../sections/Skills/skill-data";
import "./SkillsModal.scss";

function SkillsModal({ isOpen, onClose, selectedSkill: initialSelectedSkill }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Set initial selected skill when modal opens
  useEffect(() => {
    if (!isOpen || !initialSelectedSkill) return;
    setSelectedSkill(initialSelectedSkill);
  }, [isOpen, initialSelectedSkill]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  if (!initialSelectedSkill) return null;

  const allSkills = skills;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Skills & Technologies"
      size="xlarge"
    >
      <div className="skills-modal__content">
        {/* Left Side - Skills List */}
        <div className="skills-modal__skills-panel">
          <h3 className="skills-modal__skills-panel-title">All Skills</h3>
          <div className="skills-modal__skills-panel-list">
            {allSkills.map((skill) => {
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
                    <SkillIcon
                      icon={skill.icon}
                      color={skillColor}
                      size={20}
                      title={skill.name}
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
                  <SkillIcon
                    icon={selectedSkill.icon}
                    color={skillColors[selectedSkill.name]}
                    size={28}
                    title={selectedSkill.name}
                  />
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
