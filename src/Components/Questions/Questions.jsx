import Accordin from "./Accordin";
import "./Questions.css";


const Questions = () => {
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordin grid">
          <Accordin/>
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
