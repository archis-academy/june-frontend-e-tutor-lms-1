import { Accordion } from "./Accordion";
import { categories } from "./CourseData";
import styles from "./CourseListAccordionFilter.module.scss";

export const CourseListAccordionFilter = () => {
  return (
    <div className={styles.subCategory}>
      <Accordion category="Category" icon="" subCategories={null}>
        {categories.map((data, index) => {
          return (
            <Accordion
              category={data.category}
              icon={data.icon}
              subCategories={data.subCategories}
              key={index}
            ></Accordion>
          );
        })}
      </Accordion>
    </div>
  );
};
