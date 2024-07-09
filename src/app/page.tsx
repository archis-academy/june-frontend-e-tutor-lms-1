// pages/index.tsx veya herhangi bir sayfa

import React from 'react';
import CourseList from '../app/components/CourseList/CourseList';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

const HomePage: React.FC = () => {
  return (
    <div>
      <CourseList/>
    </div>
  );
};

export default HomePage;
