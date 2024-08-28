import React from "react";
import WatchCourse from "../../../Components/WatchCourse/WatchCourse";

const WatchCoursePage = ({ params }: { params: { watchCourseID: string } }) => {
  return (
    <>
      <div>Watch Course Page {params.watchCourseID}</div>
      <div>
        <WatchCourse />
      </div>
    </>
  );
};

export default WatchCoursePage;
