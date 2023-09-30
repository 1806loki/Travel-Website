import { useState } from "react";
import Accordion from "./Accordion";
import "./Questions.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

const Questions = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion 
            title="How do I choose the right travel destination for me?"
            desc="Consider your interests, budget, trip duration, weather, activities, and safety when choosing a travel destination. Research the location and trust your instincts. Your ideal destination is unique to your preferences."
            active={active1}
            setActive={setActive1}
          />
          <Accordion 
            title="What are some popular travel destinations?"
            desc="Popular travel destinations vary depending on your interests. Some common choices include cities like Paris for its romance, Tokyo for its technology, and Bali for its natural beauty."
            active={active2}
            setActive={setActive2}
          />
          <Accordion 
            title="How can I save money while traveling?"
            desc="To save money while traveling, consider budget accommodations, local food, public transportation, and booking flights and accommodations in advance. Traveling during off-peak seasons can also be more budget-friendly."
            active={active3}
            setActive={setActive3}
          />
          <Accordion 
            title="What should I pack for a trip?"
            desc="What to pack depends on your destination and activities. Generally, pack essentials like clothing, toiletries, travel documents, and any specific items needed for your trip, such as hiking gear or swimwear."
            active={active4}
            setActive={setActive4}
          />
        </div>
        <div className="secHeading" data-aos="fade-down">
          <div className="form">
            <h4>Do you have any Specific Question</h4>
            <p>
              Please fill the Form Below and our Dedicated team will get in
              Touch with you As oon as possible
            </p>
            <div className="formContent grid">
              <input type="email" placeholder="Enter Email Address" />
              <textarea placeholder="Enter  Your Question"></textarea>
              <button className="btn">Submit Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
