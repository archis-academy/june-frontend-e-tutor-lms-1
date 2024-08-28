"use client";
import React, { useState } from "react";
import { CourseCard } from ".././/CourseCard/CourseCard";
import { CoursesData } from "../../utils/CoursesData";
import styles from "../BestSellingCourses/BestSellingCourses.module.scss";
import RecentlyCourseCard from "./RecentlyCourse";
// import stylesHomepageRecentlyAdded from "./HomepageRecentlyAdded.module.scss";




function RecentlyAddedComponent(){
    return (
      <main>
        <section className={`${styles.bestSellingCourses}`} >
          <div className={styles.courseCardsWrapper}>
            {CoursesData.slice(0, 4).map((card) => {
              return (
              
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
              
              
              );
            })}
          </div>
        </section>
        <RecentlyCourseCard/>
        </main>
      );

}
 export default RecentlyAddedComponent;

// const CoursePopup = ({ course, onClose }) => {
//   if (!course) return null; // Eğer course yoksa pop-up gösterilmez

//   return (
//     <div className={styles.popupOverlay} onClick={onClose}>
//       <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
//         <h2>{course.title}</h2>
//         <p>{course.description}</p>
//         <p>Category: {course.category}</p>
//         <p>Price: {course.price}</p>
//         {/* Diğer course bilgilerini buraya ekleyebilirsiniz */}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// function RecentlyAddedComponent() {
//   const [selectedCourse, setSelectedCourse] = useState(null); // Seçili course'u tutar
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // Pop-up'ın açık/kapalı durumu

//   const handleCardClick = (course) => {
//     setSelectedCourse(course);
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//     setSelectedCourse(null);
//   };

//   return (
//     <section className={styles.bestSellingCourses}>
//       <div className={styles.courseCardsWrapper}>
//         {CoursesData.slice(0, 4).map((card) => (
//           <div key={card.id} onClick={() => handleCardClick(card)}>
//             <CourseCard
//               id={card.id}
//               title={card.title}
//               category={card.category}
//               categoryColor={card.categoryColor}
//               categoryBgColor={card.categoryBgColor}
//               price={card.price}
//               thumbnail={card.thumbnail}
//               review={card.review}
//               registeredStudents={card.registeredStudents}
//               courseOwner={card.courseOwner}
//               description={card.description}
//               duration={card.duration}
//               level={card.level}
//             />
//           </div>
//         ))}
//       </div>
      
//       {/* Pop-up bileşeni */}
//       {isPopupOpen && (
//         <CoursePopup course={selectedCourse} onClose={handleClosePopup} />
//       )}
//     </section>
//   );
// }

// export default RecentlyAddedComponent;
