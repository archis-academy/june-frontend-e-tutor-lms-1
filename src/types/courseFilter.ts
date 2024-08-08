type SubCategories = {
  name: string;
  courseNumber: number;
};

export interface CourseData {
  category: string;
  icon?: string;
  subCategories?: SubCategories[];
  children?: React.ReactNode;
};
