import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 by Vitaly Soroko</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
