import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { color, motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    alert("called");
    const formData = new FormData(event.target);

    formData.append("access_key", "23859966-aa4c-4e09-ae6a-9819fe383a05");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <motion.div
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            I'm open to new opportunities and eager to collaborate on exciting
            projects. Feel free to reach out to me with any inquiries or
            proposals. My inbox is always open, so don't hesitate to get in
            touch at your convenience.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>
                <a
                  href="mailto:rakshith14022001@gmail.com"
                  style={{ textDecoration: "none", color: "White" }}
                >
                  rakshith14022001@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>ISRO Layout,Bangalore - 560111</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>
                <a
                  href="tel:+91-8431284855"
                  style={{ textDecoration: "none", color: "White" }}
                >
                  +91-8431284855
                </a>
              </p>
            </div>
          </div>
        </div>

        <form
          className="contact-right"
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
