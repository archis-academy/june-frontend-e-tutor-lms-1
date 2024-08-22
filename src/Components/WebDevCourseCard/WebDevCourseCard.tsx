import React from "react";
import styles from "./WebDevCourseCard.module.scss";
import { devCourseDataType } from "@/types/devCourseData";

interface WebDevCourseCardProps {
  course: devCourseDataType;
}

export const WebDevCourseCard: React.FC<WebDevCourseCardProps> = ({ course }) => {
  return (
    <div className={styles.webDevCard}>
      <img src={course.thumbnail} alt={course.title} className={styles.thumbnail} />
      <div className={styles.courseInfo}>
        <div className={styles.categoryPrice}>
          <span
            className={styles.category}
            style={{
              backgroundColor: course.categoryBgColor,
              color: course.categoryColor,
            }}
          >
            {course.category}
          </span>
          <span className={styles.price}>${course.price}</span>
        </div>
        <h3 className={styles.title}>{course.title}</h3>
        <div className={styles.details}>
          <span className={styles.rating}>★ {course.review}</span>
          <span className={styles.students}>
            {course.registeredStudents} students
          </span>
        </div>
      </div>
    </div>
  );
};
