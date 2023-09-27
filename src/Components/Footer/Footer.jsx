import "./Footer.css";

import { BiLogoMediumOld } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>RE-Trips</span>
          </div>

        <div className="socials flex">
          <ImFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
        </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>

          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Travel and Condition</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+91 8745125697</span>
          <span className="email">info@roamease.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
