import React from "react";
import "./Footer.css";
import footer_logo from "../../Assets/captain-america.png";
import instagram_icon from "../../Assets/instagram-logo.png";
import facebook_icon from "../../Assets/facebook-logo.png";
import whatsapp_icon from "../../Assets/whatsapp-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footerLogo" />
        <p>GSPANN</p>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright @ 2024</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
