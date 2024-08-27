import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";
import { relatedCourses } from "../../../utils/relatedCourses";
import React from "react";

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
  return (
    <div>
      <p>Category Page</p>
      <div>
        <RelatedCourses courses={relatedCourses} />
      </div>
    </div>
  );
};

export default CategoryPage;
