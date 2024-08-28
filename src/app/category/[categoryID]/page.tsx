import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";

import React from "react";

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
  return (
    <div>
      <p>Category Page</p>
      <div>
        <RelatedCourses />
      </div>
    </div>
  );
};

export default CategoryPage;
