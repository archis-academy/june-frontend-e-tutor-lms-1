import React from "react";
import styles from "./PopularTools.module.scss";
import { devCourseDataType } from "@/types/devCourseData";
import { ToolDataType } from "@/types/toolData";

interface PopularToolsProps {
  tools: ToolDataType[];
}

export const PopularTools: React.FC<PopularToolsProps> = ({ tools }) => {
  return (
    <section className={styles.popularTools}>
      <h1 className={styles.sectionTitle}>Popular tools</h1>
      <div className={styles.toolsWrapper}>
        {tools.map((tool) => (
          <div key={tool.id} className={styles.toolCard}>
            <h2 className={styles.toolName}>{tool.name}</h2>
            <p className={styles.courseCount}>{tool.courseCount} Courses</p>
          </div>
        ))}
      </div>
    </section>
  );
};
