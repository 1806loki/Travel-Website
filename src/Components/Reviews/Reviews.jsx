import "./Reviews.css";

import Image1 from "../../Assets/pexels-the-lost-ninja-3991665.jpg";
import Image2 from "../../Assets/pexels-andrea-piacquadio-774909.jpg";
import Image3 from "../../Assets/pexels-dmitry-limonov-8768460.jpg";
import Image4 from "../../Assets/pexels-anna-shvets-3962263.jpg";
import Image5 from "../../Assets/pexels-snow-white-1440927.jpg";

import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="review section Container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">From Our Clients</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            When customers select us as their tour agency, they can anticipate a
            rewarding and enjoyable travel experience, brimming with
            unforgettable moments that will create lasting memories for a
            lifetime.
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImage flex">
            <img src={Image1} alt="Client Image" />
            <img src={Image2} alt="Client Image" />
            <img src={Image3} alt="Client Image" />
            <img src={Image4} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image5} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;


