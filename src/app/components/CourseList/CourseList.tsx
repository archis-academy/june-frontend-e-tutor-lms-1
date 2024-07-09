"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import courses, { Course, categoriesList, ToolCategory } from '../../../../src/CourseListData/CourseListData';

const CategoryList: React.FC = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [developmentOpen, setDevelopmentOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const toggleDevelopment = () => {
    setDevelopmentOpen(!developmentOpen);
  };

  const toggleTools = () => {
    setToolsOpen(!toolsOpen);
  };

  const handleDevelopmentChange = (optionIndex: number) => {};
  const handleToolChange = (optionIndex: number) => {};

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }} onClick={toggleCategory}>
        <h2 style={{ cursor: 'pointer' }}>Category</h2>
        <FaChevronDown style={{ marginLeft: '5px', cursor: 'pointer' }} />
      </div>
      {categoryOpen && (
        <ul>
          {categoriesList.map((category, index) => (
            <React.Fragment key={index}>
              <li
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={category === 'Development' ? toggleDevelopment : undefined}
              >
                <FaChevronDown style={{ marginRight: '5px', cursor: 'pointer' }} />
                <h3 style={{ cursor: 'pointer' }}>{category}</h3>
              </li>
              {category === 'Development' && developmentOpen && (
                <ul>
                  {courses.map((course: Course) => (
                    <li key={`course-${course.id}`} style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        id={`course-${course.id}`}
                        onChange={() => handleDevelopmentChange(course.id)}
                      />
                      <label htmlFor={`course-${course.id}`}>{course.title}</label>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
          <li style={{ display: 'flex', alignItems: 'center' }} onClick={toggleTools}>
            <FaChevronDown style={{ marginRight: '5px', cursor: 'pointer' }} />
            <h3 style={{ cursor: 'pointer' }}>Tools</h3>
          </li>
          {toolsOpen && (
            <ul>
              {ToolCategory.map((tool, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    id={`tool-${index}`}
                    onChange={() => handleToolChange(index)}
                  />
                  <label htmlFor={`tool-${index}`}>{tool}</label>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
