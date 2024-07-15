import React from "react";
import "./Footer.css";
import instagram_icon from "../../Assets/instagram-logo.png";
import facebook_icon from "../../Assets/facebook-logo.png";
import whatsapp_icon from "../../Assets/whatsapp-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <p>Copyright @ 2024</p>
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
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
