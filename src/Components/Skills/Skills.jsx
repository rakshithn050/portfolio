import "./Skills.css";
import skills from "../../model/Skills";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";

const Skills = () => (
  <motion.section
    className="skills section"
    id="skills"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <SectionTitle>Skills</SectionTitle>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.s_name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <TiltCard className="skill-card glass" max={15}>
            <div className="skill-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="skill-icon-wrapper">
              <img
                src={skill.s_image}
                alt={skill.s_name}
                className="skill-icon"
              />
              <div className="icon-glow"></div>
            </div>
            <h3 className="skill-name">{skill.s_name}</h3>
            <div className="skill-shine"></div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;