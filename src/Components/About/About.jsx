import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about_img.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_img} alt="Profile Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a passionate web developer, I bring a diverse skill set and a
              year of professional experience to the table. Proficient in HTML,
              CSS, JavaScript, jQuery, Bootstrap, Tailwind, Git/GitHub, and
              adept at integrating AJAX for dynamic web applications, I
              continuously strive to stay at the forefront of technology. My
              journey in web development has led me to master modern frameworks
              like React.js for front-end development and Node.js/Express.js for
              back-end development. Additionally, I have extensive experience
              working with databases such as MongoDB and MySQL.
            </p>
            <p>
              I thrive in environments where innovation is valued, constantly
              seeking opportunities to leverage my skills and delve deeper into
              the latest technologies. Whether it's crafting visually stunning
              user interfaces or architecting robust and scalable backend
              systems, I am committed to delivering high-quality solutions that
              surpass expectations. Let's collaborate and embark on a journey of
              innovation and excellence together.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML,CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1 Year</h1>
          <p>of Professional Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>13+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
