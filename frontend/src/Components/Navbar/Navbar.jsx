import React from "react";
import "./Navbar.css";
import captain_america from "../../Assets/captain-america.png";
import search_icon from "../../Assets/search-icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={captain_america} alt="" />
        <p>GSPANN</p>
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Programs</li>
        <li>Facilities</li>
        <li className="btn">Contact Us</li>
      </ul>
      <div className="search-button">
        <input type="text" placeholder="Search" />
        <button>
          <img src={search_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
