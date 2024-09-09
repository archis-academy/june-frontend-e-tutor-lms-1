import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import CourseRating from "@/Components/CourseRating/CourseRating";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";
import WatchcourseVideoSection from "../../../components/WatchcoursePageVideoSeciton/WatchcourseVideoSection"
import { CoursesData } from "../../../utils/CoursesData";
import DescriptionComponent from "../../../components/SingleCourseDescriptionComponent/SingleCourseDescriptionComponent";
const CoursePage: React.FC<{ params: { courseID: string } }> = ({ params }) => {
  const alreadyBought = false;
  const courseId = parseInt(params.courseID, 10);
  const course = CoursesData.find((course) => course.id === courseId);

  const courseDescription = course ? course.description : "Description not found";
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
             
      <DescriptionComponent id={courseId} description={courseDescription} />
      Single Course Page {params.courseID}
    
            
              <CourseRating />
            
            <StudentFeedback />
          
         
              <RelatedCourses />
            
          </div>
        ) : (
          <>
            <WatchcourseVideoSection />
            <WatchCourse />
          </>
        )}
      </div>
    </>

  );
};

export default CoursePage;
