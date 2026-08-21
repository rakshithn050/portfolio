import "./Hero.css";
import resume from "../../assets/documents/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="hero section" id="home">
    <motion.div
      className="hero-copy"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="hero-kicker">Software Engineer</p>
      <h1>
        I&apos;m <span className="hero-name">Rakshith</span>
        <br />
        I build products that feel alive.
      </h1>
      <div className="hero-type">
        <Typewriter
          options={{
            loop: true,
            delay: 55,
            deleteSpeed: 28,
            strings: [
              "Systems engineered for scale & resilience",
              "UI that moves with purpose",
            ],
            autoStart: true,
          }}
        />
      </div>
      <p className="hero-text">
        I design and ship full-stack applications with Node.js and React at
        the core — sharp frontends, reliable backends, and motion that makes
        the experience memorable.
      </p>
      <div className="hero-action">
        <AnchorLink className="btn btn-primary" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a className="btn btn-ghost" href={resume} target="_blank" rel="noreferrer">
          View resume
        </a>
      </div>
    </motion.div>

    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <div className="code-card">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="code-title">rakshith.config.js</span>
        </div>
        <pre className="code-content">
          <code>
            <span className="keyword">const</span> <span className="variable">engineer</span> = &#123;<br/>
            &nbsp;&nbsp;name: <span className="string">&quot;Rakshith&quot;</span>,<br/>
            &nbsp;&nbsp;role: <span className="string">&quot;Software Engineer&quot;</span>,<br/>
            &nbsp;&nbsp;stack: [<span className="string">&quot;React&quot;</span>, <span className="string">&quot;Node.js&quot;</span>],<br/>
            &nbsp;&nbsp;focus: <span className="string">&quot;Scale & Performance&quot;</span>,<br/>
            &nbsp;&nbsp;status: <span className="keyword">()</span> =&gt; <span className="string">&quot;Ready to build 🚀&quot;</span><br/>
            &#125;;<br/><br/>
            <span className="keyword">export default</span> engineer;
          </code>
        </pre>
      </div>
    </motion.div>
  </section>
);

export default Hero;