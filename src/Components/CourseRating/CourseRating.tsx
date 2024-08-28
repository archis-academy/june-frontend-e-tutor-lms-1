import React from "react";
import styles from "./CourseRating.module.scss";
import star from "@/public/common/starBoş.svg";
import bar5 from "@/public/common/bar-5.png";
import bar4 from "@/public/common/bar-4.png";
import bar3 from "@/public/common/bar-3.png";
import bar2 from "@/public/common/bar-2.png";
import bar1 from "@/public/common/bar-1.png";

interface StarRatingProps {
  filledStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ filledStars }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={star.src}
        alt="star"
        className={`${styles.star} ${i < filledStars ? styles.filled : ""}`}
        style={
          i < filledStars - 0.5
            ? {
                filter:
                  "brightness(0) saturate(100%) invert(70%) sepia(49%) saturate(5501%) hue-rotate(4deg) brightness(101%) contrast(104%)",
              }
            : {}
        }
      />
    );
  }

  return <div className={styles.stars}>{stars}</div>;
};

const CourseRating: React.FC = () => {
  return (
    <div className={styles.courseRating}>
      <div className={styles.ratingBox}>
        <h2>4.8</h2>
        <StarRating filledStars={4.5} />
        <p>Course Rating</p>
      </div>
      <div className={styles.ratingDetails}>
        <div className={styles.ratingRow}>
          <StarRating filledStars={5} />
          <p>5 Star Rating</p>
          <img src={bar5.src} alt="5 Star Rating Bar" />
          <span>75%</span>
        </div>
        <div className={styles.ratingRow}>
          <StarRating filledStars={4} />
          <p>4 Star Rating</p>
          <img src={bar4.src} alt="4 Star Rating Bar" />
          <span>21%</span>
        </div>
        <div className={styles.ratingRow}>
          <StarRating filledStars={3} />
          <p>3 Star Rating</p>
          <img src={bar3.src} alt="3 Star Rating Bar" />
          <span>3%</span>
        </div>
        <div className={styles.ratingRow}>
          <StarRating filledStars={2} />
          <p>2 Star Rating</p>
          <img src={bar2.src} alt="2 Star Rating Bar" />
          <span>1%</span>
        </div>
        <div className={styles.ratingRow}>
          <StarRating filledStars={1} />
          <p>1 Star Rating</p>
          <img src={bar1.src} alt="1 Star Rating Bar" />
          <span>&lt; 1%</span>
        </div>
      </div>
    </div>
  );
};

export default CourseRating;
