import React, { useState } from "react";
import "./Navbar.css";
import captain_america from "../../Assets/captain-america.png";
import search_icon from "../../Assets/search-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={captain_america} alt="" />
        <p>GSPANN</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>{" "}
          {menu === "Home" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("About Us");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/About">
            About Us
          </Link>
          {menu === "About Us" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Programs");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Programs"
          >
            Programs
          </Link>
          {menu === "Programs" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Facilities");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Facilities"
          >
            Facilities
          </Link>
          {menu === "Facilities" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Contact Us");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Contact"
          >
            Contact Us
          </Link>
          {menu === "Contact Us" ? <hr /> : <></>}{" "}
        </li>{" "}
        <li
          className="btn"
          onClick={() => {
            setMenu("Login");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Loginsignup"
          >
            Login
          </Link>
          {menu === "Login" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="search-button">
        <input type="search" placeholder="Search" />
        <button>
          <img src={search_icon} alt="search-button" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
