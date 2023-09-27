import "./Subscribe.css";

import image1 from "../../Assets/pexels-anna-shvets-3727469.jpg";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image1} alt="Women Talking" />
        <div className="textDiv">
          <h4>Best Way to start your Journey</h4>
          <p>
            We provide professional itineraries customized to individual
            preferences.
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
