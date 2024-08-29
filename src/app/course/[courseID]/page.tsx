import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  const alreadyBought = false;
  return (
    <div>
      {alreadyBought ? (
        <>
          <h1>Single Course Page {params.courseID}</h1>
          <StudentFeedback />
        </>
      ) : (
        <WatchCourse />
      )}
    </div>
  );
};

export default CoursePage;
