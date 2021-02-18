import React from "react";
import "./Navbar.css";
import logo from "./../../Assets/images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav id="nav">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <img src={logo} className="logo" />
        <ul id="nav-ul-list">
          <li id="nav-list">
            <a href="">Home</a>
          </li>
          <li id="nav-list">
            <a href="#">Create CV</a>
          </li>
          <li id="nav-list">
            <a href="#">Search Job</a>
          </li>
          <li id="nav-list">
            <a href="#">Pricing</a>
          </li>
          <li id="nav-list">
            <a href="#">Contact</a>
          </li>
          <li id="nav-list">
            <a href="#">Login</a>
          </li>
          <button id="nav-list">Sign up</button>
        </ul>
      </nav>
    </div>
  );
}
