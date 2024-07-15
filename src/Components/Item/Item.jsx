import React from "react";
import "./Item.css";
import portfolio from "../../Assets/portfolio.png";
import email_logo from "../../Assets/email-logo.png";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="propsImage" />
      <p>{props.name}</p>
      <div className="item-credentials">
        <div className="item-designation">
          <img src={portfolio} alt="" />
          {props.designation}
        </div>
        <div className="item-email">
          <img src={email_logo} alt="" />
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default Item;
