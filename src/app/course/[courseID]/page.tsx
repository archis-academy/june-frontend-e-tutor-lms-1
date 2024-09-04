import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  const alreadyBought = false;
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <>
            <StudentFeedback />
          </>
        ) : (
          <WatchCourse />
        )}
      </div>
      <div>
        <RelatedCourses />
      </div>
    </>
  );
};

export default CoursePage;
