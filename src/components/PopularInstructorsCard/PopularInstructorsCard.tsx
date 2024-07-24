import Image from "next/image";
import { PopularInstructors } from "@/types/popularInstructors";
import starIcon from "@/public/assets/star.svg";
import styles from "./PopularInstructorsCard.module.scss";

export const PopularInstructorsCard: React.FC<PopularInstructors> = ({
  name,
  role,
  thumbnail,
  review,
  numberOfStudents,
}) => {
  //Formatting number with commas. Ex. 98436 → 98,436
  const numberFormatter = new Intl.NumberFormat("en-US");

  return (
    <div className={styles.instructorCard}>
      <Image
        className={styles.instructorThumbnail}
        src={thumbnail}
        width={244}
        height={244}
        alt="instructor-profile-picture"
        priority
      />
      <div className={styles.personalInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{role}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.ratingContainer}>
          <Image src={starIcon} alt="star icon" />
          <span className={styles.rating}>{review}</span>
        </div>
        <div className={styles.studentNumberContainer}>
          <span className={styles.studentNumber}>
            {numberFormatter.format(numberOfStudents)}
          </span>
          <span className={styles.students}> students</span>
        </div>
      </div>
    </div>
  );
};
