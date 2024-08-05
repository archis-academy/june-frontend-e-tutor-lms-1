import Image from "next/image";
import { CourseData } from "@/types/courseFilter";
import styles from "./Accordion.module.scss";
import { useState } from "react";

export const Accordion: React.FC<CourseData> = ({
  category,
  icon,
  subCategories,
  children,
}) => {
  const [childrenVisibility, setChildrenVisibility] = useState("none");

  const handlechildrenVisibility = () => {
    setChildrenVisibility((prevVisibility) =>
      prevVisibility === "none" ? "block" : "none"
    );
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={handlechildrenVisibility}>
        <div className={styles.listIconWrapper}>
          {icon && <Image src={icon} alt="list-icon" fill />}
        </div>
        <h4 className={styles.category}>{category}</h4>
      </div>
      <div className={styles.subCategories} style={{ display: childrenVisibility }}>
        {subCategories &&
          subCategories.map((category, index) => {
            return (
              <div className={styles.subCategory} key={index}>
                <input type="checkbox" />
                <span>{category.name}</span>
                <span>{category.courseNumber}</span>
              </div>
            );
          })}
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};
