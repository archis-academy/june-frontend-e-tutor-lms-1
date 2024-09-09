"use client";
import styles from "./SingleCoursePageVideoSection.module.scss";
import Image from "next/image";
import star from "../../../public/star.svg";
import { CoursesData } from "@/utils/CoursesData";
import { useRouter } from "next/navigation";

function SingleCoursePageVideoSection() {
  const router = useRouter();
  if (!router.isReady) {
    return <p>Yükleniyor...</p>;
  }

  const { id } = router.query;

  if (!id) {
    return <p>Kurs ID'si bulunamadı.</p>;
  }

  const course = CoursesData.find((c) => c.id === id);

  if (!course) {
    return <p>Kurs bulunamadı.</p>;
  }

  return (
    <div className={styles.singlecoursePageVideoSection}>
      <div className={styles.singlecoursePageVideoSectionTitle}>
        <div className={styles.singlecoursePageVideoSectionTitleRouter}>
          <p>Home &gt; </p>
          <p>{course.category} &gt; </p>
          <p>{course.level}</p>
        </div>
        <h3>{course.title}</h3>
        <p>
          3 in 1 Course: Learn to design websites with Figma, build with Webflow, and
          make a living freelancing.
        </p>
        <div className={styles.singlecoursePageVideoSectionInfo}>
          <div className={styles.singlecoursePageVideoSectionInfoTrainer}>
            <Image src={course.thumbnail} alt={course.courseOwner} />
            <div className={styles.singlecoursePageVideoSectionTrainerName}>
              <span>Created by:</span>
              <p>{course.courseOwner}</p>
            </div>
          </div>
          <div className={styles.singlecoursePageVideoSectionInfoRating}>
            <div>
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
            </div>
            <p>
              {" "}
              {course.review} <span>{course.registeredStudents}(Rating)</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.singlecoursePageVideoSectionVideo}>
        <video controls>
          {/* <source src="/ArchisAcademy - Introduction" type="video/mp4" /> */}
          <source src="/videos/ArchisAcademy-Introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default SingleCoursePageVideoSection;
