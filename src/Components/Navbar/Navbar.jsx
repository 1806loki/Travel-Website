import "./Navbar.css";

import { MdTravelExplore } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="logoDiv">
        <MdTravelExplore className="icon" />
        <span>RoamEase</span>
      </div>
      <div className="menu">
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
          <li className="navList"></li>
        </ul>
        <CiCircleRemove />
      </div>
      <button className="signInBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon" />
    </nav>
  );
};

export default Navbar;
