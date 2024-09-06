"use client";
import React, { useState } from "react";
import { CourseCard } from "../CourseCard/CourseCard";
import { CoursesData } from "../../utils/CoursesData";
import styles from "../BestSellingCourses/BestSellingCourses.module.scss";
import scssRecently from "../HomepageRecentlyAdded/HomepageRecentlyAdded.module.scss";
import RecentlyCourse from "./RecentlyCourse";
import Image from "next/image";
import arrowRight from "../../../public/common/arrow-right.svg";

function RecentlyAddedComponent() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(4);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsPopupOpen(true);
  };

  const toggleCourses = () => {
    setVisibleCourses((prevVisibleCourses) =>
      prevVisibleCourses === 4 ? CoursesData.length : 4
    );
  };

  return (
    <section
      
      
    >
      <div className={styles.bestSellingCourses} style={{ backgroundColor: "#ffffff" }}>
        <h2
          style={{
            backgroundColor: "#ffffff",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "48px",
            margin: "0",
          }}
        >
          Recently added courses
        </h2>
        <div
          className={styles.courseCardsWrapper}
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {CoursesData.slice(0, visibleCourses).map((card) => (
            <div key={card.id} style={{ position: "relative" }} onClick={() => handleCardClick(card)}>
              <CourseCard
                id={card.id}
                title={card.title}
                category={card.category}
                categoryColor={card.categoryColor}
                categoryBgColor={card.categoryBgColor}
                price={card.price}
                thumbnail={card.thumbnail}
                review={card.review}
                registeredStudents={card.registeredStudents}
                courseOwner={card.courseOwner}
                description={card.description}
                duration={card.duration}
                level={card.level}
              />
            </div>
          ))}
        </div>
        <button
          onClick={toggleCourses}
          className={scssRecently["recently-course-card-btn-all"]}
        >
          {visibleCourses === 4 ? "Browse all Course" : "Reduce Courses"}{" "}
          <Image src={arrowRight} />{" "}
        </button>
      </div>
      <div className={scssRecently["recently-course-popup"]}>{isPopupOpen && <RecentlyCourse  course={selectedCourse}  />}</div>
      
    </section>
  );
}

export default RecentlyAddedComponent;
