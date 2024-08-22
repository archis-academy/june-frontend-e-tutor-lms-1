import React from "react";
import styles from "./WebDevelopmentCourses.module.scss";
import { devCourseDataType } from "@/types/devCourseData";
import { WebDevCourseCard } from "../WebDevCourseCard/WebDevCourseCard";

interface WebDevelopmentCoursesProps {
  courses: devCourseDataType[];
}

export const WebDevelopmentCourses: React.FC<WebDevelopmentCoursesProps> = ({
  courses,
}) => {
  return (
    <section className={styles.webDevelopmentCourses}>
      <h1 className={styles.sectionTitle}>
        Best selling courses in Web Development
      </h1>
      <div className={styles.courseCardsWrapper}>
        {courses.slice(0, 5).map((course) => (
          <WebDevCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
