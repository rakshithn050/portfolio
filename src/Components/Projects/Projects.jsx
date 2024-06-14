import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="mywork"
      id="mywork"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      {/* <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="Work Image" />;
        })}
      </div> */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="project-container" key={index}>
              <img src={work.w_img} alt="Work Image" />
              <div className="project-details">
                <h2>{work.w_name}</h2>
                <p>{work.w_desc}</p>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  View Project <img src={arrow_icon} alt="Arrow Icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div> */}
    </motion.div>
  );
};

export default Projects;
