import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import CourseRating from "@/Components/CourseRating/CourseRating";

import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";

const CoursePage: React.FC<{ params: { courseID: string } }> = ({ params }) => {
  const alreadyBought = true;
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <>
            <div>
              <CourseRating />
            </div>
            <StudentFeedback />
            <div>
              <RelatedCourses />
            </div>
          </>
        ) : (
          <WatchCourse />
        )}
      </div>
    </>
  );
};

export default CoursePage;
