import React from "react";
import "./AboutInfo.css";
import about_data from "../../Assets/aboutdata";
import Item from "../Item/Item";

const AboutInfo = () => {
  return (
    <div className="about-info">
      <h1>Our Team</h1>
      <hr />
      <div className="about-info-item">
        {about_data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              designation={item.designation}
              email={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutInfo;
