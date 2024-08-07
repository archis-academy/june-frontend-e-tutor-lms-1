import { CourseCard } from "../CourseCard/CourseCard";
import { BestSellingCoursesData } from "./BestSellingCoursesData";

import styles from "./BestSellingCourses.module.scss";

export const BestSellingCourses: React.FC = () => {
  return (
    <section className={styles.bestSellingCourses}>
      <h1 className={styles.sectionTitle}>Best Selling Courses</h1>
      <div className={styles.courseCardsWrapper}>
        {BestSellingCoursesData.map((card) => {
          return (
            <CourseCard
              title={card.title}
              category={card.category}
              categoryColor={card.categoryColor}
              categoryBgColor={card.categoryBgColor}
              price={card.price}
              thumbnail={card.thumbnail}
              review={card.review}
              registeredStudents={card.registeredStudents}
            />
          );
        })}
      </div>
    </section>
  );
};
