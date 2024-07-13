import React from "react";
import "./HomeContent.css";
import home_1 from "../../Assets/home_1.jpg";
import home_2 from "../../Assets/home_2.jpg";
import home_3 from "../../Assets/home_3.jpg";

const HomeContent = () => {
  return (
    <div className="home-content">
      <h1>Current Problems</h1>
      <hr />
      <div className="food">
        <h2>Food</h2>
        <div className="food-content">
          <img src={home_1} alt="foodImage" />
          <p>
            Students at the capstone stage should understand how to use
            appropriate and relevant content to develop and explore ideas in
            writing. In the final project, students must be able to (a) display
            sentence-, paragraph-, and essay-level skills; (b) use evidence to
            support a claim in an academic argument and give credit to a source;
            and (c) provide the reader with documentation of research with a
            reference page. Capstone projects must contain the appropriate
            academic sources for the discipline.
          </p>
        </div>
      </div>
      <div className="food">
        <h2>Clothes</h2>
        <div className="food-content">
          <p>
            Students at the capstone stage should understand how to use
            appropriate and relevant content to develop and explore ideas in
            writing. In the final project, students must be able to (a) display
            sentence-, paragraph-, and essay-level skills; (b) use evidence to
            support a claim in an academic argument and give credit to a source;
            and (c) provide the reader with documentation of research with a
            reference page. Capstone projects must contain the appropriate
            academic sources for the discipline.
          </p>
          <img src={home_2} alt="clothesImage" />
        </div>
      </div>
      <div className="food">
        <h2>Education</h2>
        <div className="food-content">
          <img src={home_3} alt="educationImage" />
          <p>
            Students at the capstone stage should understand how to use
            appropriate and relevant content to develop and explore ideas in
            writing. In the final project, students must be able to (a) display
            sentence-, paragraph-, and essay-level skills; (b) use evidence to
            support a claim in an academic argument and give credit to a source;
            and (c) provide the reader with documentation of research with a
            reference page. Capstone projects must contain the appropriate
            academic sources for the discipline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
