export interface Course {
    id: number;
    title: string;
  }
  
  const courses: Course[] = [
    { id: 1, title: 'Web Development' },
    { id: 2, title: 'Data Science' },
    { id: 3, title: 'Mobile Development' },
    { id: 4, title: 'Software Testing' },
    { id: 5, title: 'Software Engineering' },
    { id: 6, title: 'Software Development Tools' },
    { id: 7, title: 'No-Code Development' },
    { id: 8, title: 'No-Code Development' }
  ];
  
  export const categoriesList = [
    'Development',
    'Design',
    'Marketing',
    'Business',
    'Finance',
    'IT & Software',
    'Personal Development',
    'Photography',
    'Music',
    'Health & Fitness',
    'Teaching & Academics',
  ];

  export const ToolCategory = [
    'HTML',
    'CSS 3',
    'REACT',
    'WEBFLOW',
    'NODE.JS',
    'LARAVEL',
    'SAAS',
    'WORDPRESS'
  ]
  
  export default courses;
  