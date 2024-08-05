type SubCategories = {
  name: string;
  courseNumber: number;
};

export type CourseData = {
  category: string;
  icon?: string;
  subCategories: SubCategories[] | null;
  children?: React.ReactNode;
};
