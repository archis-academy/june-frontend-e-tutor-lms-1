import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";

import SingleCoursePageVideoSection from "../../../components/SinglecoursePageVideoSection/SingleCoursePageVideoSection"

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  const alreadyBought = true;
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <>
            <SingleCoursePageVideoSection />
            <StudentFeedback />

            <RelatedCourses />
          </>
        ) : (
          <WatchCourse />
        )}
      </div>
    </>
  );
};

export default CoursePage;
