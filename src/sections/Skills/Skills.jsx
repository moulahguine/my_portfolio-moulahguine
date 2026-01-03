import SkillIcon, { skills } from "@/data/skillsData";
import SkillsToggle from "./SkillsToggle";
import "./Skills.scss";

function Skills() {
  const skillsShown = skills.filter((skill) => skill.showOnHome);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <header className="skills__header">Tech Stack</header>

        <SkillsToggle>
          {skillsShown.map((skill) => (
            <div
              key={skill.id}
              className="skill-card"
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill-card__icon">
                <SkillIcon
                  icon={skill.icon}
                  color={skill.color}
                  size={30}
                  title={skill.name}
                />
              </div>
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </SkillsToggle>
      </div>
    </section>
  );
}

export default Skills;
