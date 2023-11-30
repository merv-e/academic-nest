import React from "react";

const FooterLinks = () => {
  return (
    <div className="d-flex flex-column flex-sm-row me-sm-3">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#classes">Classes</NavLink>
      <NavLink href="#terms">Terms</NavLink>
      <NavLink href="#privacy">Privacy</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-light me-5 text-decoration-none pb-2 pb-sm-0">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-2">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <FooterLinks />
        </div>
        <div className="text-center text-sm-end mt-3">
          <p className="mb-0">© 2023 Academic Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
