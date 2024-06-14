import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  return (
    <motion.div
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="experience-card">
        <div className="company-details">
          <h2 className="company-name">Kods Technologies</h2>
          <p className="duration">May 2023 - May 2024</p>
        </div>
        <div className="experience-highlights">
          <h3 className="section-title">Key Contributions</h3>
          <ul className="achievement-list">
            <li>
              🚀 Impactful Projects: In my first year as a junior developer,
              I've contributed to 5 major projects, assisting in UI
              enhancements, implementing critical features, and ensuring timely
              project delivery.
            </li>
            <li>
              🛠️ Rapid Skill Development: Through dedicated learning and
              hands-on experience, I've mastered key technologies like React JS,
              Node JS\Express JS, and MongoDB, increasing my proficiency by 50%
              since joining the team.
            </li>
            <li>
              🔗 Collaborative Approach: By actively participating in a team
              brainstorming sessions and sharing insights, I've helped foster a
              collaborative environment that promotes creativity and innovation.
            </li>
            <li>
              💻 Future Growth: I'm committed to achieving even greater
              milestones and making a lasting impact as a developer. With a
              hunger for learning and a drive to succeed, I'm eager to take on
              new challenges and help drive our projects to new heights.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
