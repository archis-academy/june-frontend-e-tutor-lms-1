type SubCategories = {
  title: string;
  courseNumber: number;
  isSub: boolean;
};

export interface CourseFilterData {
  title: string;
  icon: string;
  children: SubCategories[];
};
