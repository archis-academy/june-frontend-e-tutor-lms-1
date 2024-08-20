import Image from "next/image";
import { CourseFilterData, SubCategories, SubTitles } from "@/types/courseFilter";
import styles from "./AccordionItem.module.scss";
import downArrow from "@/public/common/drop-down-arrow.svg";

export const AccordionItem: React.FC<CourseFilterData> = ({
  id,
  title,
  icon,
  children,
}) => {
  return (
    <div className={styles.accordionItem}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        <span className={styles.downArrowContainer}>
          <Image src={downArrow} alt="drop-down-arrow-icon" />
        </span>
      </div>
      <div className={styles.content}>
        {children &&
          children.map((subCategory, index) => {
            const category = subCategory as SubCategories;
            return (
              <div className={styles.subCategoryContainer} key={index}>
                <div className={styles.subCategoryTitleContainer}>
                  <div className={styles.subCategoryIconWrapper}>
                    <Image src={category.icon} alt="sub-category-icon" fill />
                  </div>
                  <p className={styles.subCategoryTitle}>{category.title}</p>
                  <span className={styles.subDownArrowContainer}>
                    <Image src={downArrow} alt="drop-down-arrow-icon" />
                  </span>
                </div>
                {category.children &&
                  category.children.map((subCourse: any, index: number) => {
                    return (
                      <div className={styles.subTitleContainer} key={index}>
                        <div className={styles.subTitleTitleContainer}>
                          <input type="checkbox" />
                          <p className={styles.subTitleTitle}>{subCourse.title}</p>
                          <p className={styles.subTitleStudents}>
                            {subCourse.courseNumber}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
