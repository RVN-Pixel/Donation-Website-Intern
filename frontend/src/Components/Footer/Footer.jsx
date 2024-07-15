import React from "react";
import "./Footer.css";
import instagram_icon from "../../Assets/insta-grey.png";
import facebook_icon from "../../Assets/facebook-grey.png";
import linkedin_icon from "../../Assets/linkedin-grey.png";
import twitter_icon from "../../Assets/twitter-grey.png";
import snapchat_icon from "../../Assets/snapchat-grey.png";

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
            <img src={linkedin_icon} alt="whatsapp" />
          </div>
          <div className="footer-icons-container">
            <img src={twitter_icon} alt="twitter" />
          </div>
          <div className="footer-icons-container">
            <img src={snapchat_icon} alt="twitter" />
          </div>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
