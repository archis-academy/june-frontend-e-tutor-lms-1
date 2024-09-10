import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import CourseRating from "@/Components/CourseRating/CourseRating";

import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";
import WatchcourseVideoSection from "@/Components/WatchcoursePageVideoSeciton/WatchcourseVideoSection";
import InstructorList from "@/Components/ Instructors/InstructorList";

const CoursePage: React.FC<{ params: { courseID: string } }> = ({ params }) => {
  const alreadyBought = false;
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <>
            <>
      <div>
                <CourseRating />
            </div>
              <InstructorList />
      </div>
      <div>
        <StudentFeedback />
            <div>
              <RelatedCourses />
            </div>
          </>
        ) : (
          <>
            <WatchcourseVideoSection />
            <WatchCourse />
          </>
        )}
        </div>
    </>
    </>
  );
};

export default CoursePage;
