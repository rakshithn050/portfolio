import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import twitterx_icon from "../../assets/twitterx_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo">
            <h1>Rakshith</h1>
            <img src={theme_pattern} alt="Logo" className="theme_pattern" />
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure
            maxime officia cupiditate sed tenetur placeat aliquid! Dolor,
            quisquam, ipsa mollitia, vitae voluptatem commodi numquam cumque
            tenetur earum repudiandae nemo.
          </p> */}
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Rakshith N</p>
        <div className="footer-bottom-right">
          <p>
            <img src={github_icon} alt="Logo" className="github_icon" />
            <a href="https://github.com/Rakshith050" target="_blank">
              Github
            </a>
          </p>
          <p>
            <img src={linkedin_icon} alt="Logo" className="linkedin_icon" />
            <a href="https://www.linkedin.com/in/rakshith~n/" target="_blank">
              LinkedIN
            </a>
          </p>
          <p>
            <img src={twitterx_icon} alt="Logo" className="twitterx_icon" />
            <a href="https://x.com/RAKSHIT46275711" target="_blank">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
