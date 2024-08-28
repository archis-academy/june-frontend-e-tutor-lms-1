import React from "react";
import "./CourseRating.module.scss";
import star from "@/public/common/star.svg";
import bar5 from "@/public/common/bar-5.png";
import bar4 from "@/public/common/bar-4.png";
import bar3 from "@/public/common/bar-3.png";
import bar2 from "@/public/common/bar-2.png";
import bar1 from "@/public/common/bar-1.png";

const CourseRating = () => {
  return (
    <div className="course-rating">
      <div className="rating-summary">
        <div className="rating-value">
          <h2>4.8</h2>
          <p>Course Rating</p>
        </div>
        <div className="rating-stars">
          <img src={star.svc} alt="" />
        </div>
      </div>
      <div className="rating-details">
        <div className="rating-row">
          <p>5 Star Rating</p>
          <img src={bar5.src} alt="5 Star Rating" />
          <span>75%</span>
        </div>
        <div className="rating-row">
          <p>4 Star Rating</p>
          <img src={bar4.src} alt="4 Star Rating" />
          <span>21%</span>
        </div>
        <div className="rating-row">
          <p>3 Star Rating</p>
          <img src={bar3.src} alt="3 Star Rating" />
          <span>3%</span>
        </div>
        <div className="rating-row">
          <p>2 Star Rating</p>
          <img src={bar2.src} alt="2 Star Rating" />
          <span>1%</span>
        </div>
        <div className="rating-row">
          <p>1 Star Rating</p>
          <img src={bar1.src} alt="1 Star Rating" />
          <span>&lt; 1%</span>
        </div>
      </div>
    </div>
  );
};

export default CourseRating;
