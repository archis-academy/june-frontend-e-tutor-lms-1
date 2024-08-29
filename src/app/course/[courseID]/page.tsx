import React from "react";
import Watchcourse from "@/Components/WatchcoursePageVideoSeciton/Watchcourse";

const CoursePage: React.FC<{ params: { courseID: string } }> = ({ params }) => {
  const alreadyBought = false;
  return (
    <div>
      {alreadyBought ? (
        <></>
      ) : (
        <>
          <h1>Single Course Page: {params.courseID}</h1>
          <Watchcourse />
        </>
      )}
    </div>
  );
};

export default CoursePage;
