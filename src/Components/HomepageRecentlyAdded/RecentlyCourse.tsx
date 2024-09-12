import styles from "./HomepageRecentlyAdded.module.scss";
import Image from "next/image";
import star from "@/public/common/star.svg";
import clock from "@/public/common/clock.svg";
import BarChart from "@/public/common/bar-chart.svg";
import heart from "@/public/common/Heart.svg";
import user from "@/public/common/User.svg";
import check from "@/public/Check.svg";
import shoppingCartSimple from "@/public/common/ShoppingCartSimple.svg";
import { useRouter } from "next/navigation";
import allCourse from "@/types/allCourses";



function RecentlyCourseCard({ course }: { course: allCourse }) {

  const router = useRouter();
  const handleLinkClick = () => {
   
    router.push(`/course/${course.id}`);
  };


  if (!course) return null;

  return (
    <div className={styles["recently-course-card"]}>
      <div className={styles["recently-course-card-heading"]}>
        <p className={styles["recently-course-card-paragraph-content"]}>{course.category.toUpperCase()}</p>
        <p className={styles["recently-course-card-paragraph"]}>{course.title}</p>
      </div>
      <div className={styles["recently-course-card-course-by-container-trainer"]}>
        <div className={styles["recently-course-card-course-by"]}>
          <Image src={course.thumbnail} alt={course.title} width={50} height={50} />
          <div className={styles["recently-course-card-course-by-trainer-name"]}>
            <span>Course by</span>
            <p className={styles["recently-course-card-course-by-name"]}>{course.courseOwner}</p>
          </div>
        </div>
        <div className={styles["recently-course-card-course-by-rate"]}>
          <Image src={star} alt="star" />
          <p>{course.review}</p>
          <span>({course.registeredStudents} students)</span>
        </div>
      </div>
      <div className={styles["recently-course-card-course-by-content"]}>
        <div className={styles["recently-course-card-course-by-content-user"]}>
          <Image src={user} alt="user" />
          <span>{course.registeredStudents} <p>students</p></span>
        </div>
        <div>
          <Image src={BarChart} alt="BarChart" />
          <p>{course.level}</p>
        </div>
        <div>
          <Image src={clock} alt="clock" />
          <p>{course.duration}</p>
        </div>
      </div>
      <div className={styles["recently-course-card-course-by-content-price-discount"]}>
        <div className={styles["recently-course-card-course-by-content-price-discount-section"]}>
          <p>${course.price}</p>
        </div>
        <span>
          <Image src={heart} alt="heart" />
        </span>
      </div>
      <hr />
      <div className={`${styles["what-you-will-learn-to-course"]}`}>WHAT YOU’LL LEARN
      <div>
         <Image src={check} alt="check" />
         <p>
          Learn to use Python professionally, learning both Python 2 and Python 3!
         </p>
        </div>
        <div>
        <Image src={check} alt="check" />
        <p> Create games with Python, like Tic Tac Toe and Blackjack!</p>
        </div>
         <div>
        <Image src={check} alt="check" />
         <p> Create games with Python, like Tic Tac Toe and Blackjack!</p>
         </div>
       </div>
      <hr />
      <div className={styles["recently-course-card-course-by-content-btn"]}>
        <a href="#">
          <Image src={shoppingCartSimple} alt="shoppingCartSimple" />
          Add to Cart
        </a>
        <button onClick={handleLinkClick}>Course Details</button>
      </div>
    </div>
  );
}

export default RecentlyCourseCard;
