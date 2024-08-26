import React from "react";
import WatchCoursePage from "../../../Components/WatchCoursePage/WatchCoursePage";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <WatchCoursePage />
      </div>
    </>
  );
};

export default CoursePage;
