import { useState } from "react";
import "./Navbar.css";

import { MdTravelExplore } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  const removeNavbar = () => {
    setNavBar("menu");
  };

  return (
    <nav className="navBar">
      <div className="logoDiv">
        <MdTravelExplore className="icon" />
        <span>RoamEase</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <CiCircleRemove className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </nav>
  );
};

export default Navbar;
