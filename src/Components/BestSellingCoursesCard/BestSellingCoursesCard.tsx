import Image from "next/image";
import { BestSellingCoursesType } from "@/types/BestSellingCourses";
import styles from "./BestSellingCoursesCard.module.scss";
import starIcon from "@/public/common/star.svg";

export const BestSellingCoursesCard: React.FC<BestSellingCoursesType> = ({
  title,
  category,
  categoryColor,
  categoryBgColor,
  price,
  thumbnail,
  review,
  registeredStudents,
}) => {
  return (
    <div className={styles.courseCard}>
      <Image
        src={thumbnail}
        alt="instructor-profile-picture"
        width={244}
        height={183}
      />
      <div className={styles.cardInfo}>
        <div className={styles.categoryPriceRow}>
          <span
            className={styles.category}
            style={{ color: categoryColor, backgroundColor: categoryBgColor }}
          >
            {category}
          </span>
          <span className={styles.price}>${price}</span>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.ratingStudentsRow}>
          <span className={styles.ratingContainer}>
            <Image src={starIcon} alt="star-icon" />
            <span className={styles.rating}>{review.toString()}</span>
          </span>
          <span className={styles.registeredStudents}>
            <span className={styles.studentNumber}>
              {((registeredStudents - (registeredStudents % 100)) / 100 -
                (((registeredStudents - (registeredStudents % 100)) / 100) % 10)) /
                10}
              .{((registeredStudents - (registeredStudents % 100)) / 100) % 10}K
            </span>
            <span className={styles.students}>students</span>
          </span>
        </div>
      </div>
    </div>
  );
};
