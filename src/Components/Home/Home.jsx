import "./Home.css";

import Video from "../../Assets/Main_Bg.mp4";
import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/pic3.jpg";
import pic4 from "../../Assets/pic4.jpg";

import { AiOutlineSwapRight } from "react-icons/ai";

usss
const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>RoamEase - Simplifying Your Journey,<br /> One Click at a Time</h1>
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
          <div className="images flex">
            <img src={pic1} alt="Sea" />
            <img src={pic2} alt="Beach" />
            <img src={pic3} alt="Hill" />
            <img src={pic4} alt="City" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
