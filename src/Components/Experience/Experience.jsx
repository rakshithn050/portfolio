import "./Experience.css";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    role: "Full-Stack Developer (Node.js & React)",
    company: "AIRDIT Software Services",
    duration: "Nov 2024 — Present",
    status: "current",
    highlights: [
      "Contributing to development team delivering full-stack Node.js and React solutions for enterprise clients, including Apollo Tyres and Johnson Controls (Saudi Arabia).",
      "Designing REST APIs and building dynamic, component-based frontend interfaces for supplier management, asset management, and warehouse platforms.",
      "Implementing JWT/OAuth-based authentication, Docker-based microservices, and cloud deployments on AWS and Azure.",
      "Also building on the SAP Business Technology Platform — CAP services, Fiori Elements apps, and S/4HANA integrations.",
    ],
    tags: ["React", "Node.js", "AWS", "Docker", "SAP BTP"],
  },
  {
    role: "Full-Stack Web Developer (MERN Stack)",
    company: "Kods Technologies",
    duration: "May 2023 — May 2024",
    status: "past",
    highlights: [
      "Shipped full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Built ATOMS, a school management platform with dedicated student and parent panels, serving 300+ users.",
      "Delivered marketplace and coupon-sharing platforms handling thousands of monthly transactions.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const Experience = () => (
  <motion.section
    className="experience section"
    id="experience"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <SectionTitle>Experience</SectionTitle>
    <div className="timeline-container">
      <div className="timeline-line">
        <div className="timeline-glow"></div>
      </div>
      {experiences.map((job, index) => (
        <motion.div
          key={job.company}
          className="timeline-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className={`timeline-marker ${job.status}`}>
            <div className="marker-pulse"></div>
            <div className="marker-core"></div>
          </div>

          <div className="timeline-card glass">
            <div className="card-header">
              <div className="header-top">
                <div>
                  <h3 className="company-name">{job.company}</h3>
                  <p className="role-title">{job.role}</p>
                </div>
                {job.status === "current" && (
                  <span className="status-badge">
                    <span className="badge-dot"></span>
                    Active
                  </span>
                )}
              </div>
              <span className="duration-badge">{job.duration}</span>
            </div>

            <ul className="highlights-list">
              {job.highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + idx * 0.08 }}
                >
                  <span className="highlight-icon">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="tech-tags">
              {job.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      <div className="timeline-end">
        <div className="end-marker"></div>
        <p className="end-text">Journey continues...</p>
      </div>
    </div>
  </motion.section>
);

export default Experience;