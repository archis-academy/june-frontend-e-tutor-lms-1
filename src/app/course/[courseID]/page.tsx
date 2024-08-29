import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import CourseRating from "@/components/CourseRating/CourseRating";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <div>
      <h1>Single Course Page {params.courseID}</h1>
      <div>
        <CourseRating />
      </div>
      <StudentFeedback />
    </div>
  );
};

export default CoursePage;
