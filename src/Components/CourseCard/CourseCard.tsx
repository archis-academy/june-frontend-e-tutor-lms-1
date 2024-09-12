import Image from "next/image";
// import Link from "next/link";
import { CourseType } from "@/types/allCourses";
import styles from "./CourseCard.module.scss";
import starIcon from "@/public/common/star.svg";

export const CourseCard: React.FC<CourseType> = ({
  title,
  category,
  categoryColor,
  categoryBgColor,
  price,
  thumbnail,
  review,
  registeredStudents,
}) => {
  const formatEnrolledStudentNumber = (studentNumber: number) => {
    const formattedNumber: string =
      ((studentNumber - (studentNumber % 100)) / 100 -
        (((studentNumber - (studentNumber % 100)) / 100) % 10)) /
        10 +
      ("." + (((studentNumber - (studentNumber % 100)) / 100) % 10)) +
      "K";
    return formattedNumber;
  };

  const formatRatingNumber = (rating: number) => {
    return rating % 1 ? rating.toString() : rating.toString() + ".00";
  };

  return (
    <div className={styles.courseCard}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={thumbnail}
          fill
          sizes="244px"
          style={{ objectFit: "contain" }}
          alt="instructor-profile-picture"
          priority
        />
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.categoryPriceRow}>
          <span
            className={styles.category}
            style={{
              color: categoryColor,
              backgroundColor: categoryBgColor,
            }}
          >
            {category}
          </span>
          <span className={styles.price}>${price}</span>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.ratingStudentsRow}>
          <span className={styles.ratingContainer}>
            <Image src={starIcon} alt="star-icon" />
            <span className={styles.rating}>{formatRatingNumber(review)}</span>
          </span>
          <span className={styles.registeredStudents}>
            <span className={styles.studentNumber}>
              {formatEnrolledStudentNumber(registeredStudents)}
            </span>
            <span className={styles.students}>students</span>
          </span>
        </div>
      </div>
    </div>
  );
};
