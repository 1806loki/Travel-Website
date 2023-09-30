import "./Destinations.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/pexels-asad-photo-maldives-3293148.jpg";
import image3 from "../../Assets/pexels-pixabay-358532.jpg";
import image4 from "../../Assets/pexels-taryn-elliott-3889891.jpg";
import image5 from "../../Assets/pexels-pierre-blaché-3440444.jpg";
import image6 from "../../Assets/pexels-tom-fisk-2739664.jpg";
import image7 from "../../Assets/pexels-davi-pimentel-2064827.jpg";
import image8 from "../../Assets/pexels-asad-photo-maldives-1320686.jpg";

const destinations = [
  {
    id: 1,
    img: image1,
    name: "Schleps Island",
    location: "Indian Ocean",
    rating: 4.2,
  },
  {
    id: 2,
    img: image2,
    name: "Tropical Paradise",
    location: "Caribbean Sea",
    rating: 4.5,
  },
  {
    id: 3,
    img: image3,
    name: "Mountain Retreat",
    location: "Alps",
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: "Desert Oasis",
    location: "Sahara Desert",
    rating: 4.3,
  },
  {
    id: 5,
    img: image5,
    name: "City Lights",
    location: "New York City",
    rating: 4.8,
  },
  {
    id: 6,
    img: image6,
    name: "Jungle Adventure",
    location: "Amazon Rainforest",
    rating: 4.6,
  },
  {
    id: 7,
    img: image7,
    name: "Historic Town",
    location: "Rome, Italy",
    rating: 4.4,
  },
  {
    id: 8,
    img: image8,
    name: "Beach Haven",
    location: "Maldives",
    rating: 4.9,
  },
];

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">Explore Now</span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the Fields below to find the best Spot for your Next Tour
          </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="date" placeholder="Date" />
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>PArk</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt={destination.name} />

                  <div className="descInfo flex" data-aos="fade-up">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex" data-aos="fade-up">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>

                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
