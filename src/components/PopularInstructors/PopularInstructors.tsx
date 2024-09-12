import Link from "next/link";
import Image from "next/image";
import { PopularInstructorsCard } from "../PopularInstructorsCard/PopularInstructorsCard";
import { PopularInstructorsData } from "./PopularInstructorsData";
import arrowIcon from "@/public/common/arrow-right.svg";
import styles from "./PopularInstructors.module.scss";

export const PopularInstructors = () => {
  return (
    <section className={styles.popularInstructorsSection}>
      <h2 className={styles.title}>Top Instructors of the Month</h2>
      <div className={styles.instructorCards}>
        {PopularInstructorsData.map((data, index) => {
          return (
            <PopularInstructorsCard
              key={index}
              name={data.name}
              role={data.role}
              thumbnail={data.thumbnail}
              review={data.review}
              numberOfStudents={data.numberOfStudents}
            />
          );
        })}
      </div>
      <span className={styles.description}>
        Thousands of students waiting for an instructor. Start teaching & earning
        now!
        <span className={styles.becomeInstructorContainer}>
          <Link href="/" className={styles.becomeInstructor}>
            Become Instructor
          </Link>
          <div className={styles.arrowIconWrapper}>
            <Image
              className={styles.arrowIcon}
              src={arrowIcon}
              alt="arrow-icon"
              fill
              sizes="24px"
            />
          </div>
        </span>
      </span>
    </section>
  );
};
