import SkillIcon from "./SkillIcon";
import { skills } from "@/data/skillsData";
import "./Skills.scss";

function Skills() {
  return (
    // start skills section
    <section className="skills" id="skills">
      {/* main container */}
      <div className="container">
        {/* header */}
        <header className="skills__header">Tech Stack</header>
        {/* content */}
        <div className="skills__content">
          {/* skills */}
          {skills.map((skill) => (
            // skill card
            <div
              key={skill.id}
              className="skill-card"
              style={{ "--skill-color": skill.color }}
            >
              {/* icon */}
              <div className="skill-card__icon">
                {/* skill icon */}
                <SkillIcon
                  icon={skill.icon}
                  color={skill.color}
                  size={36}
                  title={skill.name}
                />
              </div>
              {/* name */}
              <span className="skill-card__name">{skill.name}</span>
            </div>
            // end skill card
          ))}
          {/* end skills */}
        </div>
        {/* end content */}
      </div>
      {/* end main container */}
    </section>
    // end skills section
  );
}

export default Skills;
