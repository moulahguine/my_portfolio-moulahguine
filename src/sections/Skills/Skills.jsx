import { motion } from "framer-motion";
import { skillCategories, skillColors } from "./skillsData";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="skills__title">Skills</h2>
        </div>

        <div className="skills__content">
          {/* Render each category with its skills */}
          {skillCategories.map((category) => (
            <div key={category.id} className="category-section">
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
                    <div
                      key={skill.id}
                      className={`skill-item`}
                      style={{ "--skill-color": skillColor }}
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
    </section>
  );
}

export default Skills;
