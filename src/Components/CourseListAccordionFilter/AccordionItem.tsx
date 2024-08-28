import Image from "next/image";
import React, { useState } from "react";
import { CourseFilterData, SubCategories, SubTitles } from "@/types/courseFilter";
import styles from "./AccordionItem.module.scss";
import downArrow from "@/public/common/drop-down-arrow.svg";

export const AccordionItem: React.FC<CourseFilterData> = ({ title, children }) => {
  const [childMenu, setChildMenu] = useState("none");
  const [subCategoryArrow, setSubCategoryArrow] = useState("rotate(180deg)");
  const [subTitleArrow, setSubTitleArrow] = useState("rotate(180deg)");
  const handleChildrenMenu = () => {
    setSubCategoryArrow((prevDirection) =>
      prevDirection === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)"
    );
    setChildMenu((preVisibility) => (preVisibility == "block" ? "none" : "block"));
  };

  const handleChildrenTitle = (e: React.MouseEvent<HTMLSpanElement>) => {
    const children =
      e.currentTarget.parentElement?.parentNode?.querySelector("p")?.parentElement
        ?.parentNode?.children;

    const childrenArray = Array.from(children as HTMLCollectionOf<HTMLElement>);
    // Handle the arrow rotation
    const arrow = childrenArray[0] as HTMLElement;
    const arrowIcon = arrow.childNodes[2] as HTMLElement;
    if (arrowIcon) {
      arrowIcon.style.transform =
        arrowIcon.style.transform === "rotate(180deg)"
          ? "rotate(0)"
          : "rotate(180deg)";
    }
    // Toggle visibility of the other children elements
    childrenArray.slice(1).forEach((child: HTMLElement) => {
      child.style.display = child.style.display === "none" ? "block" : "none";
    });
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        <span
          className={styles.downArrowContainer}
          style={{ transform: subCategoryArrow }}
          onClick={handleChildrenMenu}
        >
          <Image src={downArrow} alt="drop-down-arrow-icon" />
        </span>
      </div>
      <div className={styles.content} style={{ display: childMenu }}>
        {children &&
          children.map((child, index) => {
            const category = child as SubCategories;
            const title = child as SubTitles;
            if (category.isSubCategory) {
              return (
                <div className={styles.subCategoryContainer} key={index}>
                  <div className={styles.subCategoryTitleContainer}>
                    {category.icon && (
                      <div className={styles.subCategoryIconWrapper}>
                        <Image src={category.icon} alt="sub-category-icon" fill />
                      </div>
                    )}
                    <p className={styles.subCategoryTitle}>{category.title}</p>

                    <span
                      className={styles.subDownArrowContainer}
                      style={{ transform: subTitleArrow }}
                      onClick={handleChildrenTitle}
                    >
                      <Image src={downArrow} alt="drop-down-arrow-icon" />
                    </span>
                  </div>
                  {category.children &&
                    category.children.map((subCourse: SubTitles, index: number) => {
                      return (
                        <div
                          className={styles.subTitleContainer}
                          key={index}
                          style={{ display: "none" }}
                        >
                          <div className={styles.subTitleTitleContainer}>
                            <input type="checkbox" className={styles.checkBox} />
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
            } else if (title.isSub) {
              return (
                <div className={styles.subTitleContainer} key={index}>
                  <div className={styles.subTitleTitleContainer}>
                    <input type="checkbox" className={styles.checkBox} />
                    <p className={styles.subTitleTitle}>{title.title}</p>
                    <p className={styles.subTitleStudents}>{title.courseNumber}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
