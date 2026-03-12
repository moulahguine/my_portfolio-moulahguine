import SkillIcon, { skills } from "@/data/skillsData";
import SkillsToggle from "./SkillsToggle";
import "./Skills.scss";

function Skills() {
  const skillsShown = skills
    .sort((a, b) => {
      const aPriority = a.priority ?? Number.POSITIVE_INFINITY;
      const bPriority = b.priority ?? Number.POSITIVE_INFINITY;

      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.id - b.id;
    });

  return (
    // Skills section
    <section className="skills" id="skills">
      {/* Container section */}
      <div className="container">
        {/* Header section */}
        <header className="skills__header">
          <h3 className="skills__header-title">Tech Stack</h3>
        </header>
        {/* Skills toggle section */}
        <SkillsToggle>
          {skillsShown.map((skill) => (
            <div
              key={skill.id}
              className="skill__card"
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill__card-icon">
                <SkillIcon
                  icon={skill.icon}
                  color={skill.color}
                  title={skill.name}
                />
              </div>
              <span className="skill__card-name">{skill.name}</span>
            </div>
          ))}
        </SkillsToggle>
      </div>
    </section>
  );
}

export default Skills;
