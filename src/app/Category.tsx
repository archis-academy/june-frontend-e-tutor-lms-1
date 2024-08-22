import React from "react";
import { WebDevelopmentCourses } from "../Components/WebDevelopmentCourses/WebDevelopmentCourses";
import { PopularTools } from "../Components/PopularTools/PopularTools";
import { PopularKeywords } from "../Components/PopularKeywords/PopularKeywords";
import { devCourseData } from "../utils/devCourseData";
import { toolsData } from "../utils//toolsData";
import { keywordsData } from "../types/keywordsData";

const Category: React.FC = () => {
  return (
    <div>
      <WebDevelopmentCourses courses={devCourseData} />
      <PopularTools tools={toolsData} />
      <PopularKeywords keywords={keywordsData} />
    </div>
  );
};

export default Category;
