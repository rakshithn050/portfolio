import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <img src={profile_img} alt="Profile Image" className="profile-img" />
      <h1>
        <span className="title">Im Rakshith,</span> <br />
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("Full Stack Web Developer")
              .deleteAll()
              .start();
          }}
        />
      </h1>
      <p>
        "Full-stack web developer dedicated to delivering efficient software
        solutions and applications, prioritizing seamless integration of
        cutting-edge frontend and backend technologies."
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me!!
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            My Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
