import { useState } from "react";
import Accordion from "./Accordion";
import "./Questions.css";

const Questions = () => {
  const [active, setActive] = useState(
    "How do I choose the right travel Destination for me ?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right travel Destination for me ?"
            desc=" Consider your interests, budget, trip duration, weather, activities, and safety when choosing a travel destination. Research the location and trust your instincts. Your ideal destination is unique to your preferences."
            active={active}
            setActive={setActive}
          />
        
        </div>
        <div className="form">
          <div className="secHeading">
            <h4>Do you have any Specific Question</h4>
            <p>
              Please fill the Form Below and our Dedicated team will get in
              Touch with you As oon as possible
            </p>
          </div>
          <div className="fromContent grid">
            <input type="email" placeholder="Enter Email Address" />
            <textarea placeholder="Enter  Your Question"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
