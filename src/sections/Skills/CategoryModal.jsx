import React, { useEffect, useState, useRef } from "react";
import { skillCategories, skillColors } from "./skillsData";

const CategoryModal = ({ isOpen, onClose, selectedCategory }) => {
  console.log("CategoryModal props:", { isOpen, selectedCategory }); // Debug log

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const skillsListRef = useRef(null);
  const modalRef = useRef(null);

  // Handle escape key press and focus management
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleKeyDown = (e) => {
      if (!isOpen || !selectedCategory) return;

      const categoryData = skillCategories.find(
        (cat) => cat.id === selectedCategory.id
      );
      if (!categoryData || !categoryData.skills.length) return;

      const currentIndex = categoryData.skills.findIndex(
        (skill) => skill.id === selectedSkill?.id
      );

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          const nextIndex =
            currentIndex < categoryData.skills.length - 1
              ? currentIndex + 1
              : 0;
          setSelectedSkill(categoryData.skills[nextIndex]);
          break;
        case "ArrowUp":
          e.preventDefault();
          const prevIndex =
            currentIndex > 0
              ? currentIndex - 1
              : categoryData.skills.length - 1;
          setSelectedSkill(categoryData.skills[prevIndex]);
          break;
        case "Tab":
          // Allow default tab behavior for accessibility
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      // Set initial selected skill
      const categoryData = skillCategories.find(
        (cat) => cat.id === selectedCategory.id
      );
      if (categoryData && categoryData.skills.length > 0) {
        setSelectedSkill(categoryData.skills[0]);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, selectedCategory, selectedSkill]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200); // Match animation duration
  };

  // Handle modal animations
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Focus the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen || !selectedCategory) return null;

  // Find the category data
  const categoryData = skillCategories.find(
    (cat) => cat.id === selectedCategory.id
  );
  if (!categoryData) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: isAnimating ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          maxWidth: "1200px",
          width: "90%",
          maxHeight: "90vh",
          overflow: "hidden",
          transform: isAnimating ? "scale(1)" : "scale(0.95)",
          opacity: isAnimating ? 1 : 0,
          transition: "all 0.2s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#111827",
              margin: 0,
            }}
          >
            {categoryData.name}
          </h2>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "24px",
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div
          style={{
            display: "flex",
            height: "calc(90vh - 120px)",
            flexDirection: window.innerWidth < 1024 ? "column" : "row",
          }}
        >
          {/* Left Side - Skills List */}
          <div
            style={{
              width: window.innerWidth < 1024 ? "100%" : "40%",
              borderRight:
                window.innerWidth < 1024 ? "none" : "1px solid #e5e7eb",
              backgroundColor: "#f9fafb",
              padding: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Skills in this category
            </h3>
            <div
              style={{
                maxHeight: "calc(90vh - 200px)",
                overflowY: "auto",
              }}
            >
              {categoryData.skills.map((skill) => {
                const IconComponent = skill.icon;
                const skillColor = skillColors[skill.name] || "#6C757D";
                const isSelected =
                  selectedSkill && skill.id === selectedSkill.id;

                return (
                  <div
                    key={skill.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "#dbeafe" : "transparent",
                      border: isSelected
                        ? "2px solid #3b82f6"
                        : "2px solid transparent",
                      marginBottom: "8px",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: `${skillColor}20`,
                        marginRight: "12px",
                      }}
                    >
                      <IconComponent
                        style={{ color: skillColor, fontSize: "20px" }}
                      />
                    </div>
                    <span
                      style={{
                        fontWeight: "500",
                        color: isSelected ? "#1d4ed8" : "#374151",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Blog Content */}
          <div
            style={{
              width: window.innerWidth < 1024 ? "100%" : "60%",
              padding: "24px",
              overflowY: "auto",
            }}
          >
            {selectedSkill ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: `${skillColors[selectedSkill.name]}20`,
                      marginRight: "16px",
                    }}
                  >
                    <selectedSkill.icon
                      style={{
                        color: skillColors[selectedSkill.name],
                        fontSize: "28px",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#111827",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {selectedSkill.name}
                    </h3>
                    <p
                      style={{
                        color: "#6b7280",
                        margin: 0,
                      }}
                    >
                      My learning journey
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      color: "#374151",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {selectedSkill.blog}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <span style={{ fontSize: "32px" }}>💡</span>
                  </div>
                  <p style={{ color: "#6b7280" }}>
                    Select a skill to read about my experience
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
