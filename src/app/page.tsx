"use client";
import React, { useState } from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import { CourseCardProps } from '../type/CourseCardSituation';
import styles from '../components/CourseCard/CourseCard.module.css';

const courses: (CourseCardProps & { className: string })[] = [
  {
    image: 'deisgn.png',
    profession: 'DESIGN',
    price: 99.99,
    description: 'The Python Mega Course: Build 10 Real World Applications',
    rating: 5.0,
    numPeople: 150,
    className: styles['prof-june1']
  },
  {
    image: 'software.png',
    profession: 'IT & SOFTWARE',
    price: 129.99,
    description: 'Facebook Ads & Facebook Marketing MASTERY 2021 Course',
    rating: 2.6,
    numPeople: 200,
    className: styles['prof-june2']
  },
  {
    image: 'developments.png',
    profession: 'DEVELOPMENT',
    price: 79.99,
    description: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    rating: 1.3,
    numPeople: 100,
    className: styles['prof-june3']
  },
];

const whatYoullLearn = [
  "Learn to use Python professionally, learning both Python 2 and Python 3!",
  "Create games with Python, like Tic Tac Toe and Blackjack!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!"
];

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <p className={styles['container-p']}>Recently added courses</p>
      </div>
      <main className={`${styles['course-container']} ${isModalOpen ? styles['modal-open'] : ''}`}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </main>
      <div className={styles['button-container']}>
        <button className={styles['button-june']} onClick={handleButtonClick}>Browse all Courses</button>
      </div>
      {isModalOpen && (
        <div className={styles['modal-container']}>
          <div className={styles['modal']}>
            <span className={styles['close-button']} onClick={handleCloseModal}>&times;</span>
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
              <button className={styles['btn-p']}>
                <img src="/Vector.png" alt="Add to Cart Icon" />
                Add To Card
              </button>
              <button className={styles['btn-cs']}>Course Detail</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
