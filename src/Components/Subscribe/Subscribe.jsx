import "./Subscribe.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

import image1 from "../../Assets/pexels-anna-shvets-3727469.jpg";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image1} alt="Women Talking" />
        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way to start your Journey</h4>
          <p data-aos="fade-up">
            We provide professional itineraries customized to individual
            preferences.
          </p>
          <button data-aos="fade-up" className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
