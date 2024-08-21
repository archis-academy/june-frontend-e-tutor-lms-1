import { AccordionItem } from "./AccordionItem";
import { categories } from "./CourseFilterData";
import styles from "./CourseListAccordionFilter.module.scss";

export const CourseListAccordionFilter = () => {
  return (
    <div className={styles.accordionContainer}>
      {categories.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            children={item.children}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};
