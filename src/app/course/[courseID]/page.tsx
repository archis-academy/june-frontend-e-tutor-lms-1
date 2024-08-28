import React from "react";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <RelatedCourses />
      </div>
    </>
  );
};

export default CoursePage;
