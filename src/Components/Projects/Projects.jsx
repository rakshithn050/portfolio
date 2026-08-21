import "./Projects.css";
import projects from "../../model/Projects";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";

const Projects = () => (
  <motion.section
    className="projects section"
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <SectionTitle>Projects</SectionTitle>
    <div className="projects-grid">
      {projects.map((project) => (
        <TiltCard key={project.w_name} className="project-card" max={8}>
          <img src={project.w_img} alt={project.w_name} />
          <div className="project-meta">
            <h3>{project.w_name}</h3>
            <p>{project.w_desc}</p>
            {/* <a href={project.w_link} target="_blank" rel="noreferrer">
              View project
            </a> */}
          </div>
        </TiltCard>
      ))}
    </div>
  </motion.section>
);

export default Projects;
