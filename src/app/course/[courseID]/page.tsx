import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <div>
      <h1>Single Course Page {params.courseID}</h1>
      <StudentFeedback />
    </div>
  );
};

export default CoursePage;
