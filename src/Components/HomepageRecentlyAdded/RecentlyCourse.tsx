import React from "react";
import styles from "./HomepageRecentlyAdded.module.scss";
import Image from "next/image";
import RecentlyProfile from "../../../public/RecentlyProfile.svg";
import star from "../../../public/common/star.svg";
import clock from "../../../public/common/Clock.svg";
import BarChart from "../../../public/common/bar-chart.svg";
import heart from "../../../public/common/Heart.svg";
import user from "../../../public/common/User.svg";
import check from "../../../public/Check.svg";
import shoppingCartSimple from "../../../public/common/ShoppingCartSimple.svg";

function RecentlyCourseCard() {
  return (
    <div className={`${styles["recently-course-card"]}`}>
      <div className={`${styles["recently-course-card-heading"]}`}>
        <p className={`${styles["recently-course-card-paragraph-content"]}`}>
          Developments
        </p>
        <p className={`${styles["recently-course-card-paragraph"]}`}>
          2021 Complete Python Bootcamp From Zero to Hero in Python
        </p>
      </div>
      <div
        className={`${styles["recently-course-card-course-by-container-trainer"]}`}
      >
        <div className={`${styles["recently-course-card-course-by"]}`}>
          <Image src={RecentlyProfile} alt="RecentlyProfile" />
          <div
            className={`${styles["recently-course-card-course-by-trainer-name"]}`}
          >
            <span>Course by</span>
            <p className={`${styles["recently-course-card-course-by-name"]}`}>
              Kevin Gilbert
            </p>
          </div>
        </div>
        <div className={`${styles["recently-course-card-course-by-rate"]}`}>
          <Image src={star} alt="star" />
          <p>5.0</p>
          <span>(357,914)</span>
        </div>
      </div>
      <div className={`${styles["recently-course-card-course-by-content"]}`}>
        <div className={`${styles["recently-course-card-course-by-content-user"]}`}>
          <Image src={user} alt="user" />
          <span>
            265.7K <p>students</p>
          </span>
        </div>
        <div>
          <Image src={BarChart} alt="BarChart" />
          <p>Beginner</p>
        </div>
        <div>
          <Image src={clock} alt="clock" />
          <p>6 hour</p>
        </div>
      </div>
      <div
        className={`${styles["recently-course-card-course-by-content-price-discount"]}`}
      >
        <div
          className={`${styles["recently-course-card-course-by-content-price-discount-section"]}`}
        >
            <p> $14.00<strike>$26.00</strike> </p>
       <div className={`${styles["recently-course-card-course-by-content-price-discount-percentage"]}`}>
                <p >56% off</p>
                </div>
        </div>
        <span>
          <Image src={heart} alt="heart" />
        </span>
      </div>
      <hr />
      <div className={`${styles["what-you-will-learn-to-course"]}`}>WHAT YOU’LL LEARN
      <div>
        <Image src={check} alt="check" />
        <p>
          Learn to use Python professionally, learning both Python 2 and Python 3!
        </p>
        </div>
        <div>
        <Image src={check} alt="check" />
        <p> Create games with Python, like Tic Tac Toe and Blackjack!</p>
        </div>
        <div>
        <Image src={check} alt="check" />
        <p> Create games with Python, like Tic Tac Toe and Blackjack!</p>
        </div>
      </div>
      <hr />
      <div className={`${styles["recently-course-card-course-by-content-btn"]}`}>
      <a href="#">
        {" "}
        <Image src={shoppingCartSimple} alt="shoppingCartSimple" />
        Add to Cart
      </a>
      <button>Course Detail</button>
      </div>
    </div>
  );
}

export default RecentlyCourseCard;
