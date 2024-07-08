"use client";
import React, { useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import ModalContent from "../components/ModalContent/ModalContent";
import { courses } from "../components/CardDataCourse/whatYoullLearn";
import styles from "../components/CourseCard/CourseCard.module.css";

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
            <ModalContent handleCloseModal={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
