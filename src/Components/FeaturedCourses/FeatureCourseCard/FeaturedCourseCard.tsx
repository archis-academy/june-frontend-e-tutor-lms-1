import React from "react";
import { CourseType } from "@/types/allCourses";
import Image from "next/image";
import Kevin from "@/public/kevin.svg";
import star from "@/public/star.svg";
import user from "@/public/user.svg";
import barChart from "@/public/barchat.svg";
import clock from "@/public/clock.svg";
import styles from "./FeaturedCourseCard.module.scss";

const FeatureCourseCard: React.FC<CourseType> = ({
  category,
  description,
  price,
  thumbnail,
  registeredStudents,
  review,
  courseOwner,
  level,
  categoryColor,
  categoryBgColor,
  duration,
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
  const formatPrice = (rating: number) => {
    return rating % 1 ? rating.toString() : rating.toString() + ".00";
  };
  const formatRating = (rating: number) => {
    return rating % 1 ? rating.toString() : rating.toString() + ".0";
  };
  const numberFormatter = new Intl.NumberFormat("en-US");
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImage}>
        <Image src={thumbnail} alt="course-thumbnail" fill />
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.flex} ${styles.priceAndCategory}`}>
          <h3
            className={styles.category}
            style={{ color: categoryColor, backgroundColor: categoryBgColor }}
          >
            {category}
          </h3>
          <div className={`${styles.flex} ${styles.prices}`}>
            <p className={styles.newPrice}>
              ${formatPrice(Math.round(price * 0.75))}
            </p>
            <p className={styles.oldPrice}>${formatPrice(price)}</p>
          </div>
        </div>
        <p className={styles.description}>{description.slice(0, 40)}...</p>
        <div className={`${styles.flex} ${styles.ownerAndRating}`}>
          <div className={`${styles.flex} ${styles.ownerWrapper}`}>
            <div className={styles.ownerThumb}>
              <Image src={Kevin} alt="course-owner-thumbnail" fill />
            </div>
            <p className={styles.ownerName}>{courseOwner}</p>
          </div>
          <div className={`${styles.flex} ${styles.ratingWrapper}`}>
            <Image src={star} alt="star-icon" />
            <div className={`${styles.flex} ${styles.ratings}`}>
              <p className={styles.rating}>{formatRating(review)}</p>
              <p className={styles.rateNumber}>
                ({numberFormatter.format(registeredStudents)})
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.courseDetailsWrapper}`}>
          <div className={`${styles.flex} ${styles.studentDetails}`}>
            <Image src={user} alt="number-of-students-icon" />
            <p className={styles.registeredStudents}>
              {formatEnrolledStudentNumber(registeredStudents)}
            </p>
            <p className={styles.students}>students</p>
          </div>
          <div className={`${styles.flex} ${styles.levelAndDuration}`}>
            <Image src={barChart} alt="level-icon" />
            <p>{level}</p>
          </div>
          <div className={`${styles.flex} ${styles.levelAndDuration}`}>
            <Image src={clock} alt="clock-icon" />
            <p>{duration} hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourseCard;
