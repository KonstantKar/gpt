import React from "react";
import "./CTA.css";
import { Request } from "../../components";
const CTA = () => {
  return (
    <div className="gpt3__cta ">
      <div className="gpt3__cta__container">
        <div className="gpt3__cta__container-title">
          <Request textColor="black" />
          <p>Register today & start exploring the endless possiblities.</p>
        </div>
      </div>
      <div className="gpt3__cta__container-button">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
