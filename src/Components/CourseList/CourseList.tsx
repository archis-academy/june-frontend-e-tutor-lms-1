import Image from "next/image";
import { CourseCard } from "../CourseCard/CourseCard";
import { CourseListData } from "./CourseListData";
import filterIconBlack from "@/public/common/filter-icon-black.svg";
import searchIcon from "@/public/common/search-icon.svg";
import styles from "./CourseList.module.scss";

export const CourseList: React.FC = () => {
  return (
    <section className={styles.courseList}>
      <div className={styles.filterContainer}>
        <button className={styles.FilterBtn}>
          <Image src={filterIconBlack} alt="filter-icon" />
          <span>Filter</span>
          <span>{/* Filter counter */}</span>
        </button>
        <div className={styles.searchInputWrapper}>
          <div className={styles.searchIconWrapper}>
            <Image src={searchIcon} alt="search-icon" />
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for a course..."
            style={{ backgroundImage: `${searchIcon}` }}
          />
        </div>
      </div>
      <div className={styles.courseCardsWrapper}>
        {CourseListData.map((card) => {
          return (
            <CourseCard
              title={card.title}
              category={card.category}
              categoryColor={card.categoryColor}
              categoryBgColor={card.categoryBgColor}
              price={card.price}
              thumbnail={card.thumbnail}
              review={card.review}
              registeredStudents={card.registeredStudents}
            />
          );
        })}
      </div>
    </section>
  );
};
