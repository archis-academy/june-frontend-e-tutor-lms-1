import React from "react";
import Watchcourse from "@/Components/WatchcoursePageVideoSeciton/Watchcourse";

const CoursePage: React.FC<{ params: { courseID: string } }> = ({ params }) => {
  return (
    <div>
      <h1>Single Course Page: {params.courseID}</h1>
      <Watchcourse />
    </div>
  );
};

export default CoursePage;
