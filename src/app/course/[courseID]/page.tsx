import React from "react";
import WatchCourse from "../../../Components/WatchCourse/WatchCourse";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <WatchCourse />
      </div>
    </>
  );
};

export default CoursePage;
