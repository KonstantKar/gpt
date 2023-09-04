import React from "react";
import "./Request.css";
const Request = ({ textColor }) => {
  const textStyle = {
    color: textColor || "var(--color-text)", // Если цвет не передан, используем значение по умолчанию
  };
  return (
    <div className="gpt3__request" style={textStyle}>
      Request Early Access to Get Started
    </div>
  );
};

export default Request;
