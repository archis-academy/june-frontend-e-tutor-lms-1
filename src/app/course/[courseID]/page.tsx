import React from "react";

const CoursePage = ({ params }: { params: { courseID: string } }) => {


    
  return (
    <div>
      Single Course Page {params.courseID}
    </div>
  );
};

export default CoursePage;
