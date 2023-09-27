/* eslint-disable react/no-unescaped-entities */
import "./Portfolio.css";

import safety from "../../Assets/protection.png";
import destination from "../../Assets/destination.png";
import customer from "../../Assets/customer-care.png";
import travellers from "../../Assets/pexels-taryn-elliott-4840207.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should you Choose us</h3>
            <p>
              We have got a treasure trove of wisdom and experience in the
              Travel Industry!😄🌍
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={safety} alt="" />
              </div>
              <div className="info">
                <h4>Safety and Support</h4>
                <p>
                  In the world of travel, safety and support are our guiding
                  stars. We're committed to safeguarding your data with
                  state-of-the-art security measures while providing
                  round-the-clock emergency assistance. Your journey's peace of
                  mind is our priority, and we're here to ensure your travels
                  are as smooth as they are memorable.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={destination} alt="" />
              </div>
              <div className="info">
                <h4>World Of Possibilities</h4>
                <p>
                  Discover a world of possibilities! Our travel website boasts
                  an array of destinations that span the globe. From bustling
                  metropolises to serene natural wonders, we've curated a
                  diverse collection of places to cater to every traveler's
                  wanderlust. Explore, experience, and embark on your next
                  adventure with unsure your travels are as smooth as they are
                  memorable.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={customer} alt="" />
              </div>
              <div className="info">
                <h4>Customer-Centric Support</h4>
                <p>
                  At RoamEase, we're dedicated to providing exceptional customer
                  service every step of your journey. Our team is here to make
                  your travel experience seamless and worry-free. Whether you
                  have questions, need assistance, or want to share your
                  feedback, our customer service is always just a message or
                  call away. Your satisfaction is our top priority, and we're
                  here to ensure your travel dreams become reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={travellers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
