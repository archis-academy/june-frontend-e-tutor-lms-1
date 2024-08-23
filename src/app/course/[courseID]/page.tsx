import React from "react";
import CourseDetails from "../../../Components/WatchCoursePage/WatchCoursePage";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <CourseDetails />
      </div>
    </>
  );
};

export default CoursePage;
