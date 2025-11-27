import SkillIcon from "./SkillIcon";
import { skills } from "./skill-data";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header header__section">
          <h2 className="skills__title header__title">Tech Stack</h2>
          <span className="skills__subtitle header__line"></span>
        </div>
        <div className="skills__content">
          <div className="skills__row">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-card__icon">
                  <SkillIcon
                    icon={skill.icon}
                    color={skill.color}
                    size={36}
                    title={skill.name}
                  />
                </div>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
