import React from "react";
import { CoursesData } from "../../../utils/CoursesData";
import DescriptionComponent from "../../../components/SingleCourseDescriptionComponent/SingleCourseDescriptionComponent";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  const courseId = parseInt(params.courseID, 10);
  const course = CoursesData.find((course) => course.id === courseId);

  const courseDescription = course ? course.description : "Description not found";

  return (
    <div>
      <DescriptionComponent id={courseId} description={courseDescription} />
      Single Course Page {params.courseID}
    </div>
  );
};

export default CoursePage;
