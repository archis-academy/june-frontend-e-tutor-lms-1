import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import WacthFeedbacks from "@/Components/WatchCoursePageFeedbacks/WacthFeedbacks";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <div>
      <h1>Single Course Page {params.courseID}</h1>
      <StudentFeedback />
      <WacthFeedbacks />
    </div>
  );
};

export default CoursePage;
