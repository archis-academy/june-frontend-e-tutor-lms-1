import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import WatchCourse from "../../../Components/WatchCourse/WatchCourse";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <h1>
          {" "}
          <WatchCourse />
        </h1>
        <StudentFeedback />
      </div>
    </>
  );
};

export default CoursePage;
