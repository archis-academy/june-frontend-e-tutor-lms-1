import React from "react";
import styles from "./WebDevelopmentCourses.module.scss";
import { CoursesData } from "@/utils/CoursesData";
import { CourseCard } from "../CourseCard/CourseCard";

export const WebDevelopmentCourses: React.FC = () => {
  return (
    <section className={styles.webDevelopmentCourses}>
      <h1 className={styles.sectionTitle}>
        Best selling courses in Web Development
      </h1>
      <div className={styles.courseCardsWrapper}>
        {CoursesData.slice(0, 5).map((card) => {
          return (
            <CourseCard
              id={card.id}
              title={card.title}
              category={card.category}
              categoryColor={card.categoryColor}
              categoryBgColor={card.categoryBgColor}
              price={card.price}
              thumbnail={card.thumbnail}
              review={card.review}
              registeredStudents={card.registeredStudents}
              courseOwner={card.courseOwner}
              description={card.description}
              duration={card.duration}
              level={card.level}
            />
          );
        })}
      </div>
    </section>
  );
};
