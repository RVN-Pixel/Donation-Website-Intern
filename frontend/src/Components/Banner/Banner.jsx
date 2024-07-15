import React from "react";
import "./Banner.css";
import banner from "../../Assets/banner.jpg";

const Banner = () => {
  return (
    <section className="banner-main">
      <div className="banner-inner">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
