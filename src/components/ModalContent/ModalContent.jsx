"use client";
import React, { useState } from 'react';
import { whatYoullLearn } from '../../components/CardDataCourse/whatYoullLearn';
import styles from '../../components/CourseCard/CourseCard.module.css';

const ModalContent = ({ handleCloseModal }) => {
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  const handleAddToCartClick = () => {
    setAddToCartClicked(true);
  };

  return (
    <div className={styles['modal-content']}>
      <p className={styles['develop-p']}>DEVELOPMENT</p>
      <p className={styles['st-p']}>2021 Complete Python Bootcamp From Zero to Hero in Python</p>
      <div className={styles['container-photo']}>
        <div className={styles['author']}>
          <img src="/Photo.png" alt="Author" />
          <p>Course by <br />Kevin Gilbert</p>
        </div>
        <div className={styles['rating']}>
          <img src="/star-filled.png" alt="Rating" />
          <p>5.0 <span>(357,914)</span></p>
        </div>
      </div>
      <div className={styles['arrangement']}>
        <div className={styles['st-container']}>
          <img src="/User.png" alt="" />
          <p>265.7 K </p>
          <p> students </p>
        </div>
        <div className={styles['st-container']}>
          <img src="/bar-chart.png" alt="" />
          <p>Beginner</p>
        </div>
        <div className={styles['st-container']}>
          <img src="/Clock.png" alt="" />
          <p>6 hour</p>
        </div>
      </div>
      <div className={styles['price-container']}>
        <p className={styles['discounted-price']}>$14.00</p>
        <p className={styles['original-price']}>$26.00</p>
        <p className={styles['discount']}>56% OFF</p>
        <div className={styles['heart']}>
          <img src="/heart.png" alt="" />
        </div>
      </div>
      <div>
        <p>What you’ll learn</p>
        {whatYoullLearn.map((item, index) => (
          <div key={index} className={styles['Check-p']}>
            <img src="/Check.png" alt="Check" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className={styles['page-btn']}>
        <button className={styles['btn-p']} onClick={handleAddToCartClick}>
          <img src="/Vector.png" alt="Add to Cart Icon" />
          Add To Cart
        </button>
        <button className={styles['btn-cs']} onClick={handleCloseModal}>Course Detail</button>
      </div>
    </div>
  );
}

export default ModalContent;
