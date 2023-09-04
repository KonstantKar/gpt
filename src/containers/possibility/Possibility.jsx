import React from "react";
import "./Possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility possibility__padding">
      <div className="gpt3__possibility-img">
        <img src={possibility} alt="image"></img>
      </div>
      <div className="gpt3__possibility-info">
        <div className="gpt3__possibility-info__early">
          Request Early Access to Get Started
        </div>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__possibility-info__request">
          Request Early Access to Get Started
        </div>
      </div>
    </div>
  );
};

export default Possibility;
