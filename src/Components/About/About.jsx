import "./About.css";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";

const stats = [
  { value: "3+ Years", label: "Professional experience" },
  { value: "15+", label: "Projects completed" },
  { value: "2", label: "Global clients" },
];

const techStack = [
  {
    category: "Frontend",
    techs: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Framer Motion"]
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express", "REST APIs", "CAP Services", "Microservices"]
  },
  {
    category: "Database",
    techs: ["MongoDB", "PostgreSQL", "SAP HANA", "Redis"]
  },
  {
    category: "DevOps & Cloud",
    techs: ["AWS", "Azure", "Docker", "Git", "CI/CD"]
  },
];

const About = () => (
  <motion.section
    className="about section"
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <SectionTitle>About me</SectionTitle>
    <div className="about-layout">
      <TiltCard className="about-visual glass">
        <div className="tech-stack-wrapper">
          <div className="stack-header">
            <div className="header-line"></div>
            <h3>Tech Arsenal</h3>
            <div className="header-line"></div>
          </div>
          <div className="stack-scroll">
            {techStack.map((section, idx) => (
              <motion.div
                key={section.category}
                className="stack-category"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <h4 className="category-title">{section.category}</h4>
                <div className="tech-grid">
                  {section.techs.map((tech, techIdx) => (
                    <motion.div
                      key={tech}
                      className="tech-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + (techIdx * 0.05), duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <span className="tech-text">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        </div>
      </TiltCard>
      <div className="about-copy">
        <p>
          I&apos;m a full-stack developer with 3+ years of experience, mainly
          living in Node.js and React. I design REST APIs, build
          component-driven frontends, and work across MongoDB, PostgreSQL,
          Docker, and cloud platforms like AWS and Azure to ship products end
          to end.
        </p>
        <p>
          Alongside that, I&apos;ve built up solid experience on the SAP
          Business Technology Platform — CAP services, Fiori Elements apps,
          and enterprise integrations — delivered for clients including
          Apollo Tyres and Johnson Controls, Saudi Arabia.
        </p>
        <div className="about-stats">
          {stats.map((item) => (
            <article key={item.label} className="stat glass">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default About; 