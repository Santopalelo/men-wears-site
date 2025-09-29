import React from "react";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Our blog post</h1>
      <div className="blogcards">
        <div className="blogInfo">
          <img src="/images/belt2.png" alt="belt 2" width={100} />
          <p>Politicts</p>
        </div>
        <div className="blogInfo">
          <img src="/images/belt2.png" alt="belt 2" width={100} />
          <p>Education</p>
        </div>
        <div className="blogInfo">
          <img src="/images/belt2.png" alt="belt 2" width={100} />
          <p>Business</p>
        </div>
      </div>

      <div />
    </div>
  );
};

export default Blog;
