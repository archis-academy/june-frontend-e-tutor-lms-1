type SubCategories = {
  name: string;
  courseNumber: number;
  isSub: boolean;
};

export interface CourseFilterData {
  category: string;
  icon?: string;
  subCategories?: SubCategories[];
  children?: React.ReactNode;
};
