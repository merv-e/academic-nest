import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-end align-items-end">
      <div className="d-flex justify-content-between">
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </div>
      <p>&copy;2023 Academic Nest. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
