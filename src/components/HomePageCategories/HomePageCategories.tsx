import Link from "next/link";
import Image from "next/image";
import { HomePageCategoriesData } from "./HomePageCategoriesData";
import arrowIcon from "@/public/common/arrow-right.svg";
import styles from "./HomePageCategories.module.scss";

export const HomePageCategories = () => {
  const numberFormatter = new Intl.NumberFormat("en-US");

  return (
    <section className={styles.homePageCategories}>
      <h3 className={styles.title}>Browse Top Category</h3>
      <div className={styles.categoriesWrapper}>
        {HomePageCategoriesData.map((category, index) => {
          return (
            <div
              className={styles.categoryCard}
              key={index}
              style={{ backgroundColor: category.backgroundColor }}
            >
              <Image
                src={category.icon}
                alt="category-icon"
                width={64}
                height={64}
              />
              <div className={styles.categoryInfo}>
                <span className={styles.categoryName}>{category.category}</span>
                <span className={styles.courseNumber}>
                  {numberFormatter.format(category.numberOfCourses)} Courses
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.moreCategory}>
        We have more category & subcategory.
        <span className={styles.browseAllContainer}>
          <Link href="/" className={styles.browseAll}>
            Browse All
          </Link>
          <Image className={styles.arrowIcon} src={arrowIcon} alt="arrow-icon" />
        </span>
      </p>
    </section>
  );
};
