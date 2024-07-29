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
        <span
          className={styles.category}
          style={{ color: categoryColor, backgroundColor: categoryBgColor }}
        >
          {category}
        </span>
        <span className={styles.price}>{price}</span>
        <p className={styles.title}>{title}</p>
        <hr />
        <Image src={starIcon} alt="star-icon" />
        <span className={styles.rating}>{review}</span>
        <span className={styles.students}>{registeredStudents} students</span>
      </div>
    </div>
  );
};
