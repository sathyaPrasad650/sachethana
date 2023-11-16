import React from "react";
import navbarStyle from "../Styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={navbarStyle.container}>
      <div className={navbarStyle.menu}>ABOUT US</div>
      <div className={navbarStyle.menu}>SERVICES</div>
      <div className={navbarStyle.menu}>TESTIMONIALS</div>
      <div className={navbarStyle.menu}>GALLERY</div>
      <div className={navbarStyle.menu}>PORTFOLIO</div>
      <a
        href="https://forms.gle/bkMgYnij4GoBmEe69"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={navbarStyle.menu}>APPOINTMENT</div>
      </a>
      <div className={navbarStyle.menu}>CONTACT US</div>
    </div>
  );
};
