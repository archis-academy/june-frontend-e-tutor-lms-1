import React from "react";
import styles from "./RelatedCourses.module.scss";
import { CoursesData } from "@/utils/CoursesData";
import { CourseCard } from "../CourseCard/CourseCard";
import ArrrowRight from "@/public/common/ArrowRight.png";

export const RelatedCourses: React.FC = () => {
  return (
    <section className={styles.RelatedCourses}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Related Courses</h1>
        <button className={styles.viewAllButton}>
          View All
          <img src={ArrrowRight.src} alt="Arrow Right Icon" />
        </button>
      </div>
      <div className={styles.courseCardsWrapper}>
        {CoursesData.slice(0, 5).map((card) => {
          return (
            <CourseCard
              key={card.id}
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
