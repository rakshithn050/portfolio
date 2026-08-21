import { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const links = [
  { id: "home", label: "Home", offset: 0 },
  { id: "about", label: "About", offset: 50 },
  { id: "experience", label: "Experience", offset: 50 },
  { id: "skills", label: "Skills", offset: 50 },
  { id: "projects", label: "Projects", offset: 50 },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <AnchorLink className="nav-logo" href="#home" onClick={() => setActive("home")}>
        RN
      </AnchorLink>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <ul className={`nav-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <AnchorLink
              className={`nav-link ${active === link.id ? "active" : ""}`}
              offset={link.offset}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.id);
                setOpen(false);
              }}
            >
              {link.label}
            </AnchorLink>
          </li>
        ))}
      </ul>

      <AnchorLink className="btn btn-primary nav-cta" offset={50} href="#contact">
        Let&apos;s talk
      </AnchorLink>
    </nav>
  );
};

export default Navbar;
