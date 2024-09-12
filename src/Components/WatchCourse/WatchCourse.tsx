"use client";
import React, { useState } from "react";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import LectureNotesTab from "./LectureNotesTab/LectureNotesTab";
import AttachFileTab from "./AttachFileTab/AttachFileTab";
import CommentsTab from "./CommentsTab/CommentsTab";
import styles from "./WatchCourse.module.scss";

const WatchCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("description");

  return (
    <div className={styles.WatchContainer}>
      <nav className={styles.WatchTabs}>
        <a
          href="#description"
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </a>

        <a
          href="#lectureNotes"
          className={activeTab === "lectureNotes" ? "active" : ""}
          onClick={() => setActiveTab("lectureNotes")}
        >
          Lecture Notes
        </a>
        <a
          href="#attachFile"
          className={activeTab === "attachFile" ? "active" : ""}
          onClick={() => setActiveTab("attachFile")}
        >
          Attach File <span className={styles.fileCountBadge}>01</span>
        </a>
        <a
          href="#comments"
          className={activeTab === "comments" ? "active" : ""}
          onClick={() => setActiveTab("comments")}
        >
          Comments
        </a>
      </nav>
      <div className={styles.WatchContent}>
        <section id="description">
          <DescriptionTab />
        </section>
        <section id="lectureNotes">
          <LectureNotesTab />
        </section>
        <section id="attachFile">
          <AttachFileTab />
        </section>
        <section id="comments">
          <CommentsTab />
        </section>
      </div>
    </div>
  );
};

export default WatchCourse;
