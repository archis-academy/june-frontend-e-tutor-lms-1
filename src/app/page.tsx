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
      <main className={styles['course-container']}>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
