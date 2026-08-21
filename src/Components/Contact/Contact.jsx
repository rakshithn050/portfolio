import { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "23859966-aa4c-4e09-ae6a-9819fe383a05");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((response) => response.json());

    if (res.success) {
      setStatus("Message sent. I will get back to you soon.");
      event.target.reset();
    } else {
      setStatus("Something went wrong. Please try email instead.");
    }
  };

  return (
    <motion.section
      className="contact section"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <SectionTitle>Get in touch</SectionTitle>
      <div className="contact-grid">
        <div>
          <h3>Let&apos;s talk</h3>
          <p>
            Open to roles, collaborations, and interesting problems. Drop a
            note and I will reply.
          </p>
          <ul>
            <li>
              <a href="mailto:rakshith14022001@gmail.com">
                rakshith14022001@gmail.com
              </a>
            </li>
            <li>ISRO Layout, Bangalore — 560111</li>
            <li>
              <a href="tel:+918431284855">+91 84312 84855</a>
            </li>
          </ul>
        </div>
        <form className="contact-form glass" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required placeholder="you@email.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required placeholder="What should we build?" />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
