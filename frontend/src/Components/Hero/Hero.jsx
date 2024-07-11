import React from "react";
import "./Hero.css";
import arrow_icon from "../../Assets/white-right-icon.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Share Love and Laugh With Lives Around You</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Donate Now <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
