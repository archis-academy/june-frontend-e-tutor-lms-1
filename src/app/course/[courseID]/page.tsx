import Watchcourse from "@/Components/WatchcoursePageVideoSeciton/Watchcourse";
import React from "react";

const CoursePage = ({ params }: { params: { courseID: string } }) => {

  return (
    <div>
      Single Course Page {params.courseID}
     <Watchcourse />
    </div>
  );
};

export default CoursePage;
