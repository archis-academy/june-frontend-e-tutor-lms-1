"useState";
import React from "react";
import styles from "./InstructorCard.module.scss";
import { Instructor } from "@/types/Instructor";
import { formatNumber, formatCourseCount } from "@/utils/ınstructorFormat";
import star from "@/public/common/star.svg";
import users from "@/public/common/Users.svg";
import playCircle from "@/public/common/PlayCircle.svg";

const InstructorCard: React.FC<Instructor> = ({
  image,
  name,
  title,
  rating,
  students,
  courses,
  description,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.content}>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.stats}>
            <div>
              <img src={star.src} alt="rating" />
              {rating} Course rating
            </div>
            <div>
              <img src={users.src} alt="students" />
              {formatNumber(students)} Students
            </div>
            <div>
              <img src={playCircle.src} alt="courses" />
              {formatCourseCount(courses)} Courses
            </div>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
