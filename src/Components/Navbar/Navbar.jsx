import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from "../../assets/theme_pattern.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px"; // Ensure this matches the CSS value
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1 className="logo">Rakshith</h1>
        <img src={theme_pattern} alt="Logo" className="theme_pattern" />
      </div>

      <img
        src={menu_open}
        alt="Hamburger Menu Open"
        onClick={openMenu}
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Hamburger Menu Close"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
            {menu === "home" ? <img src={underline} alt="underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
            {menu === "about" ? <img src={underline} alt="underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p
              onClick={() => {
                setMenu("experience");
              }}
            >
              Experience
            </p>
            {menu === "experience" ? (
              <img src={underline} alt="underline" />
            ) : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p
              onClick={() => {
                setMenu("skills");
              }}
            >
              Skills
            </p>
            {menu === "skills" ? <img src={underline} alt="underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p
              onClick={() => {
                setMenu("projects");
              }}
            >
              Projects
            </p>
            {menu === "projects" ? (
              <img src={underline} alt="underline" />
            ) : null}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Let's Connect!!
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;