import React from "react";
import DescriptionTab from "../WatchCourse/DescriptionTab/DescriptionTab";
import LectureNotesTab from "../WatchCourse/LectureNotesTab/LectureNotesTab";
import AttachFileTab from "../WatchCourse/AttachFileTab/AttachFileTab";
import CommentsTab from "../WatchCourse/CommentsTab/CommentsTab";
import styles from "./WatchCourse.module.scss";

const WatchCourse: React.FC = () => {
  return (
    <div className={styles.WatchContainer}>
      <nav className={styles.WatchTabs}>
        <button>Description</button>
        <button>Lecture Notes</button>
        <button>
          Attach File <span className={styles.fileCountBadge}>01</span>
        </button>
        <button>Comments</button>
      </nav>
      <div className={styles.WatchContent}>
        <DescriptionTab />
        <LectureNotesTab />
        <AttachFileTab />
        <CommentsTab />
      </div>
    </div>
  );
};

export default WatchCourse;
