import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import InstructorList from "@/Components/ Instructors/InstructorList";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>
        <h1>Single Course Page {params.courseID}</h1>
        <InstructorList />
      </div>
      <div>
        <StudentFeedback />
      </div>
    </>
  );
};

export default CoursePage;
