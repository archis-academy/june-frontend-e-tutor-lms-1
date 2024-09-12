import React from "react";
import styles from "./PopularKeywords.module.scss";

interface PopularKeywordsProps {
  keywords: string[];
}

export const PopularKeywords: React.FC<PopularKeywordsProps> = ({ keywords }) => {
  return (
    <section className={styles.popularKeywords}>
      <h2 className={styles.sectionTitle}>Popular keyword:</h2>
      <div className={styles.keywordsWrapper}>
        {keywords.map((keyword, index) => (
          <span key={index} className={styles.keyword}>
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
};
