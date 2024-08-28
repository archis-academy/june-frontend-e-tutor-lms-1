export type SubTitles = {
  title: string;
  courseNumber: number;
  isSub: boolean;
};
export type SubCategories = {
  title: string;
  icon: string;
  isSubCategory: boolean;
  children: SubTitles[];
};

export interface CourseFilterData {
  title: string;
  icon?: string;
  children?: SubTitles[] | SubCategories[];
}
