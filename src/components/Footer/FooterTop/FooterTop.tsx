import React from "react";
import styles from "./FooterTop.module.scss";

export const FooterTop = () => {
  return (
    <footer className={styles.additionalFooter}>
      <div className={styles.startLearning}>
        <p>Start learning with 67.1k students around the world.</p>
        <div className={styles.buttonsWrapper}>
          <button>Join the Family</button>
          <button>Browse all courses</button>
        </div>
      </div>
      <div className={styles.stats}>
        <div>
          <h5>6.3k</h5>
          <p>Online courses</p>
        </div>
        <div>
          <h5>26k</h5>
          <p>Certified Instructor</p>
        </div>
        <div>
          <h5>99.9%</h5>
          <p>Sucess Rate</p>
        </div>
      </div>
    </footer>
  );
};
