"use client";

import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function SkillsToggle({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`skills__wrapper ${isExpanded ? "skills__wrapper--expanded" : ""}`}
      >
        <div className="skills__content">{children}</div>

        {!isExpanded && (
          <div className="skills__fade">
            <button
              className="skills__more-indicator"
              onClick={() => setIsExpanded(true)}
              aria-label="Show all skills"
              type="button"
            >
              <GoChevronDown size={24} />
            </button>
          </div>
        )}
      </div>

      {isExpanded && (
        <button
          className="skills__collapse-btn"
          onClick={() => setIsExpanded(false)}
          aria-label="Show less skills"
          type="button"
        >
          <GoChevronUp size={20} />
          Show Less
        </button>
      )}
    </>
  );
}
