import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import CourseRating from "@/components/CourseRating/CourseRating";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import WatchCourse from "@/Components/WatchCourse/WatchCourse";
import { CoursesData } from "../../../utils/CoursesData";
import DescriptionComponent from "../../../components/SingleCourseDescriptionComponent/SingleCourseDescriptionComponent";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  const alreadyBought = false;
  const courseId = parseInt(params.courseID, 10);
  const course = CoursesData.find((course) => course.id === courseId);

  const courseDescription = course ? course.description : "Description not found";
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        {alreadyBought ? (
          <>
            <div>
              <CourseRating />
            </div>
            <StudentFeedback />
            <div>
            <div>
      <DescriptionComponent id={courseId} description={courseDescription} />
      Single Course Page {params.courseID}
    </div>
              <RelatedCourses />
            </div>
          </>
        ) : (
          <WatchCourse />
        )}
      </div>
    </>

  );
};

export default CoursePage;
