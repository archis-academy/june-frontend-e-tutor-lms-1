"use client";
import React, { useState } from "react";
import { CourseCard } from "../CourseCard/CourseCard";
import { CoursesData } from "@/utils/CoursesData";
import styles from "../BestSellingCourses/BestSellingCourses.module.scss";
import scssRecently from "../HomepageRecentlyAdded/HomepageRecentlyAdded.module.scss";
import RecentlyCourse from "./RecentlyCourse";
import Image from "next/image";
import arrowRight from "@/public/common/arrow-right.svg";
import CourseType from "../../types/allCourses";


function RecentlyAddedComponent() {
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState();
  const [visibleCourses, setVisibleCourses] = useState(4);

  const handleCardClick = (course:CourseType) => {
    setSelectedCourse(course);
    setIsPopupOpen(course.id);
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
              <div className={scssRecently["recently-course-popup"]}>{isPopupOpen === card.id && <RecentlyCourse   course={selectedCourse}  />}
              
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={toggleCourses}
          className={scssRecently["recently-course-card-btn-all"]}
        >
          {visibleCourses === 4 ? "Browse all Course" : "Reduce Courses"}
          <Image src={arrowRight} alt="arrowRight" />
        </button>
        
      </div>
      
      
    </section>
  );
}

export default RecentlyAddedComponent;


