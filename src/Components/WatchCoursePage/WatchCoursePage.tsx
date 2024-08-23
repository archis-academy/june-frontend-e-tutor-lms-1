import React from "react";
import styles from "./WatchCoursePage.module.scss";

const WatchCoursePage = () => {
  return (
    <div className={styles.watchCoursePage}>
      <div className={styles.courseTabs}>
        <button className={`${styles.courseTab} ${styles.active}`}>
          Description
        </button>
        <button className={styles.courseTab}>Lectures Notes</button>
        <button className={styles.courseTab}>
          Attach File <span className={styles.fileCountBadge}>01</span>
        </button>
        <button className={styles.courseTab}>Comments</button>
      </div>

      <div className={styles.courseContent}>
        <h2>Lectures Description</h2>
        <p>
          We cover everything you need to build your first website. From creating
          your first page through to uploading your website to the internet. We'll
          use the world's most popular (and free) web design tool called Visual
          Studio Code. There are exercises files you can download and then work along
          with me. At the end of each video I have a downloadable version of where we
          are in the process so that you can compare your project with mine. This
          will enable you to see easily where you might have a problem. We will delve
          into all the good stuff such as how to create your very own mobile burger
          menu from scratch learning some basic JavaScript and Jquery.
        </p>
        <p>
          If all that sounds a little too fancy - don't worry, this course is aimed
          at people new to web design and who have never coded before. We'll start
          right at the beginning and work our way through step by step.
        </p>

        <h3>Lecture Notes</h3>
        <button className={styles.downloadNotesButton}>Download Notes</button>
        <p>
          In sit aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris
          finibus vel. Praesent eget mi in mi maximus egestas. Mauris eget ipsum in
          justo bibendum pellentesque. Sed ac id arcu aliquam eleifend condimentum
          quis diam. Phasellus tempus, urna at auctor mattis, in nisl nunc tincidunt
          lorem, eu egestas augue lectus sit amet sapien. Maecenas tristique aliquet
          massa, a venenatis augue tempor in. Aliquam turpis urna, imperdiet in
          lacus, a posuere suscipit augue.
        </p>
        <ul>
          <li>Morbi sit amet pretium tellus. Donec blandit fermentum tincidunt.</li>
          <li>
            Proin iaculis sem ut imperdiet tincidunt. Nam varius ac mi id sodales.
          </li>
          <li>Curabitur posuere ultricies diam in egestas.</li>
          <li>
            Donec sed diam et lacus pharetra vestibulum, at est id sodales. Nam
            pharetra sagittis varius.
          </li>
          <li>Sed elementum, turpis id lacinia vulputate, purus vehicula.</li>
        </ul>

        <h3>Attach Files (01)</h3>
        <div className={styles.fileAttachment}>
          <span className={styles.fileInfo}>
            Create account on webflow.pdf (1.2 MB)
          </span>
          <button className={styles.downloadFileButton}>Download File</button>
        </div>
      </div>
    </div>
  );
};

export default WatchCoursePage;
