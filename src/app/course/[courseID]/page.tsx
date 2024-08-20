import React from "react";
import SingleCourseFeedback from '@/components/SingleCourseFeedback/SingleCourseFeedback';
const CoursePage = ({ params }: { params: { courseID: string } }) => {


    
  return (
    <div>
      Single Course Page {params.courseID}
      <SingleCourseFeedback />
    </div>
  );
};

export default CoursePage;
