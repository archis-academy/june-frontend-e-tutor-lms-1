import React from "react";
import styles from "./RelatedCourses.module.scss";
import { relatedCoursesType } from "@/types/relatedCourses";
import { RelatedCourseCard } from "../RelatedCoursesCard/RelatedCoursesCard";

interface RelatedCoursesProps {
  courses: relatedCoursesType[];
}

export const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courses }) => {
  return (
    <section className={styles.RelatedCourses}>
      <h1 className={styles.sectionTitle}>Related Courses</h1>
      <div className={styles.courseCardsWrapper}>
        {courses.slice(0, 5).map((course) => (
          <RelatedCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
