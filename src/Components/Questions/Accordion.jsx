import "./Questions.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

const Accordion = ({ title, desc, active, setActive }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const toggleAccordion = () => {
    setActive(active === title ? null : title);
  };

  return (
    <div className="accordionContainer" data-aos="fade-up">
      <span
        className={`title flex ${active === title ? "activeTitle" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
        <span>
          {active === title ? (
            <BsFillArrowUpCircleFill className="icon" />
          ) : (
            <BsFillArrowDownCircleFill className="icon" />
          )}
        </span>
      </span>
      <p
        style={{ lineHeight: "20px" }}
        className={(active === title ? "show" : "") + " description"}
      >
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
