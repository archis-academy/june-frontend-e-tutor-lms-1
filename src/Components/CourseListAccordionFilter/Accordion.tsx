import Image from "next/image";
import { CourseFilterData } from "@/types/courseFilter";
import styles from "./Accordion.module.scss";
import { useRef, useState } from "react";

export const Accordion: React.FC<CourseFilterData> = ({
  category,
  icon,
  subCategories,
  children,
}) => {
  const [subCategoriesVisibility, setSubCategoriesVisibility] = useState("none");
  const [childrenVisibility, setChildrenVisibility] = useState("none");
  const handleSubCategoriesVisibility = () => {
    setSubCategoriesVisibility((prevVisibility) =>
      prevVisibility === "none" ? "block" : "none"
    );
    setChildrenVisibility((prevVisibility) =>
      prevVisibility === "none" ? "block" : "none"
    );
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={handleSubCategoriesVisibility}>
        <div className={styles.listIconWrapper}>
          {icon && <Image src={icon} alt="list-icon" fill />}
        </div>
        <h4 className={styles.category}>{category}</h4>
      </div>
      <div
        className={styles.subCategories}
        style={{ display: subCategoriesVisibility }}
      >
        {subCategories &&
          subCategories.map((category, index) => {
            return (
              <div
                className={subCategories.isSub ? styles.subCategory : styles.header}
                key={index}
              >
                <input type="checkbox" />
                <span>{category.name}</span>
                <span>{category.courseNumber}</span>
              </div>
            );
          })}
      </div>
      <div className={styles.childrenContainer}>
        <div style={{ display: childrenVisibility }}>{children}</div>
      </div>
    </div>
  );
};
