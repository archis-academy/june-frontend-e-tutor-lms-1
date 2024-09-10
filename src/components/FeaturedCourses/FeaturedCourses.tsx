import FeatureCourseCard from "./FeatureCourseCard/FeaturedCourseCard";
import { CoursesData } from "@/utils/CoursesData";
import styles from "./FeaturedCourses.module.scss";

const FeaturedCourses: React.FC = () => {
  return (
    <section className={styles.featuredCoursesContainer}>
      <div className={styles.background}></div>
      <div className={styles.featuredCourses}>
        <div className={styles.mainTitleWrapper}>
          <h2 className={styles.mainTitle}>Our Featured Courses</h2>
          <p className={styles.sectionDescription}>
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius
            purus et eleifend porta.
          </p>
        </div>
        <div>
          <div className={styles.courseContainer}>
            {CoursesData.slice(20, 24).map((course: any) => {
              return (
                <FeatureCourseCard
                  id={course.id}
                  title={course.title}
                  category={course.category}
                  categoryColor={course.categoryColor}
                  categoryBgColor={course.categoryBgColor}
                  price={course.price}
                  thumbnail={course.thumbnail}
                  review={course.review}
                  registeredStudents={course.registeredStudents}
                  courseOwner={course.courseOwner}
                  description={course.description}
                  duration={course.duration}
                  level={course.level}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
