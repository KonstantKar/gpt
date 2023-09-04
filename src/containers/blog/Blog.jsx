import React from "react";
import "./Blog.css";
import { News } from "../../components";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <h1 className="gradient__text">
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
      <div className="gpt3__blog__news">
        <div className="gpt3__blog__news__column1">
          <News
            img={blog01}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
        </div>
        <div className="gpt3__blog__news__column2">
          <News
            img={blog02}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
          <News
            img={blog03}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
          <News
            img={blog04}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
          <News
            img={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
          <News
            img={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
          <News
            img={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
