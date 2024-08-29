import React from "react";
import { WebDevelopmentCourses } from "../../../Components/WebDevelopmentCourses/WebDevelopmentCourses";
import { PopularTools } from "../../../Components/PopularTools/PopularTools";
import { PopularKeywords } from "../../../Components/PopularKeywords/PopularKeywords";

import { toolsData } from "../../../utils//toolsData";
import { keywordsData } from "../../../types/keywordsData";

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
  return (
    <div>
      <WebDevelopmentCourses />
      <PopularTools tools={toolsData} />
      <PopularKeywords keywords={keywordsData} />
    </div>
  );
};

export default CategoryPage;
