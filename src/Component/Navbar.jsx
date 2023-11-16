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
      <div className={navbarStyle.menu}>APPOINTMENT</div>
      <div className={navbarStyle.menu}>CONTACT US</div>
    </div>
  );
};
