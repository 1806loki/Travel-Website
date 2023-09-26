/* eslint-disable react/prop-types */
import "./Questions.css";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
      <span className="title flex">
        {title}
        <span onClick={() => setActive(title)}>
          <BsFillArrowDownCircleFill className="icon" />
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>{desc}</p>
    </div>
  );
};

export default Accordion;
