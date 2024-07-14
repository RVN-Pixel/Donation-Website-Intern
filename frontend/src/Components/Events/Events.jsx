import React from "react";
import "./Events.css";
import program_data from "../../Assets/programdata";
import ProgramItem from "../ProgramItem/ProgramItem";

const Events = () => {
  return (
    <div className="event-info">
      <h1>Our Programs To Offer</h1>
      <hr />
      <div className="event-info-item">
        {program_data.map((item, i) => {
          return (
            <ProgramItem
              key={i}
              id={item.id}
              field={item.field}
              icon={item.icon}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
