import { useEffect } from "react";
import "./Middle.css";

import "aos/dist/aos.css";
import Aos from "aos";

const Middle = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>10</h1>
            <p>World Of Experiences</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>2k+</h1>
            <p>Fine Destinations</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>10k+</h1>
            <p>Customer Reviews</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>10</h1>
            <p>World Of Experiences</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
