import React from "react";
import "./ProgramItem.css";

const ProgramItem = (props) => {
  return (
    <div className="programs">
      <div className="program">
        <img src={props.image} alt="" />
        <div className="caption">
          <img src={props.icon} alt="" />
          <h2>{props.field}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem;
