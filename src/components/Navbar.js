import { useState } from "react";
import logo from "../assets/icons/logo trans.png";

const NavLinks = ({ text, link }) => (
  <li className="nav-item">
    <a className="nav-link fs-5" href={`#${link}`}>
      {text}
    </a>
  </li>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-secondary position-fixed w-100"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img
            src={logo}
            width="180"
            height="50"
            className="d-inline-block align-top"
            alt="logo of the academic nest"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarScroll"
        >
          <ul className="navbar-nav ms-auto">
            <NavLinks text="On Campus" link="on-campus" />
            <NavLinks text="Online" link="online" />
            <NavLinks text="Sign in" link="sign-in" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
