import React from "react";
import "./News.css";
const News = ({ img, title, data }) => {
  return (
    <div className="gpt3__news">
      <img src={img} alt="img" />
      <div className="gpt3__news__container">
        <div className="gpt3__news__container-data">{data}</div>
        <div className="gpt3__news__container-title">
          {title}
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default News;
