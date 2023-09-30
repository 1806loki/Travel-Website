import "./Reviews.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

import Image1 from "../../Assets/pexels-the-lost-ninja-3991665.jpg";
import Image2 from "../../Assets/pexels-andrea-piacquadio-774909.jpg";
import Image3 from "../../Assets/pexels-dmitry-limonov-8768460.jpg";
import Image5 from "../../Assets/group.jpg";
import Image4 from "../../Assets/pexels-snow-white-1440927.jpg";

import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section Container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">From Our Clients</span>
          <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
          <p data-aos="fade-up">
            When customers select us as their tour agency, they can anticipate a
            rewarding and enjoyable travel experience, brimming with
            unforgettable moments that will create lasting memories for a
            lifetime.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon"  />
            <AiFillStar className="icon"  />
            <AiFillStar className="icon"  />
            <AiFillStar className="icon"  />
            <AiFillStar className="icon"  />
          </span>

          <div className="clientsImage flex">
            <img src={Image1} alt="Client Image" data-aos="fade-up"/>
            <img src={Image2} alt="Client Image" data-aos="fade-up"/>
            <img src={Image3} alt="Client Image" data-aos="fade-up"/>
            <img src={Image4} alt="Client Image" data-aos="fade-up"/>
          </div>
        </div>
        <div className="imgDiv" data-aos="fade-down">
          <img src={Image5} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
