import React, { useEffect } from "react";
import { skillCategories, skillColors } from "./skillsData";
import "./SkillModal.scss";

const SkillModal = ({ isOpen, onClose, selectedCategory, selectedSkill }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !selectedCategory) return null;

  // Find the category data
  const categoryData = skillCategories.find(
    (cat) => cat.id === selectedCategory.id
  );

  if (!categoryData) return null;

  return (
    <div className="skill-modal-overlay" onClick={onClose}>
      <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="skill-modal__header">
          <h3 className="skill-modal__title">{categoryData.name}</h3>
          <button
            className="skill-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span>×</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="skill-modal__content">
          {/* Left Side - Skills List (40% width) */}
          <div className="skill-modal__skills">
            <h4 className="skill-modal__skills-title">
              Skills in this category
            </h4>
            <div className="skill-modal__skills-list">
              {categoryData.skills.map((skill) => {
                const IconComponent = skill.icon;
                const skillColor = skillColors[skill.name] || "#6C757D";
                const isSelected =
                  selectedSkill && skill.id === selectedSkill.id;

                return (
                  <div
                    key={skill.id}
                    className={`skill-modal__skill-item ${isSelected ? "selected" : ""}`}
                    style={{ "--skill-color": skillColor }}
                  >
                    <div className="skill-modal__skill-icon">
                      <IconComponent />
                    </div>
                    <span className="skill-modal__skill-name">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Description (60% width) */}
          <div className="skill-modal__description">
            <h4 className="skill-modal__description-title">My Journey</h4>
            <div className="skill-modal__description-content">
              <p>
                My journey with <strong>{categoryData.name}</strong> has been an
                exciting adventure of continuous learning and growth. I've
                dedicated countless hours to mastering these technologies,
                building projects, and solving real-world problems.
              </p>

              <p>
                Each skill in this category represents not just technical
                knowledge, but also the ability to create meaningful solutions.
                From the fundamentals to advanced concepts, I've embraced the
                challenges and celebrated the breakthroughs.
              </p>

              <p>
                <em>
                  This is placeholder content that you can replace with your
                  personal story, specific projects, achievements, or any other
                  details about your experience with {categoryData.name}.
                </em>
              </p>

              {/* Placeholder for future content */}
              <div className="skill-modal__placeholder">
                <p>🚀 Ready to add your personal content here!</p>
                <p>You can include:</p>
                <ul>
                  <li>Specific projects you've built</li>
                  <li>Challenges you've overcome</li>
                  <li>Certifications or achievements</li>
                  <li>Links to your work</li>
                  <li>Images or screenshots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
