import React from "react";
import styles from "./RelatedCoursesCard.module.scss";
import { relatedCoursesType } from "@/types/relatedCourses";

interface RelatedCourseCardProps {
  course: relatedCoursesType;
}

export const RelatedCourseCard: React.FC<RelatedCourseCardProps> = ({ course }) => {
  return (
    <div className={styles.RelatedCourseCard}>
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
