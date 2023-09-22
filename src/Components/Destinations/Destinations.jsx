import "./Destinations.css";

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bs";

const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="">
          <span className="redText">Explore Now</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the Fields below to find the best Spot for your Next Tour
          </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Loation" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="date" placeholder="Date" />
          </div>

          <button className="icon">
            <BiSearchAlt2 className="icon" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
