import { motion } from "framer-motion";
import { skillCategories, skillColors } from "./skillsData";
import "./Skills.scss";

function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="skills__title">Skills</h2>
        </motion.div>

        <motion.div
          className="skills__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Render each category with its skills */}
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="category-section"
              variants={categoryVariants}
            >
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
                    <motion.div
                      key={skill.id}
                      className={`skill-item`}
                      variants={skillItemVariants}
                      style={{ "--skill-color": skillColor }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="skill-icon">
                        <IconComponent />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
