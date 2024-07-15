import React from "react";
import "./Facility.css";
import banner from "../../Assets/banner.jpg";

const Facility = () => {
  return (
    <section className="facility-main">
      <div className="facility-banner">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Facility;
