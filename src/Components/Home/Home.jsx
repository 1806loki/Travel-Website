import "./Home.css";

import Video from "../../Assets/Main_Bg.mp4";

import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>RoamEase - Simplifying Your Journey, One Click at a Time</h1>
        <p>
          Explore the Worlds Most Thrilling Adventures; Life is Too Short to
          Stay Put
        </p>
        <button className="btn flex">
          Get Started
          <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
