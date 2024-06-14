import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import skills from "../../assets/Skills";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div class="ag-format-container">
        <div class="ag-courses_box">
          {skills.map((service, index) => {
            return (
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>
                  <div class="ag-courses-item_title">{service.s_name}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
