export type SubTitles = {
  title: string;
  courseNumber: number;
  isSub: boolean;
};
export type SubCategories = {
  title: string;
  icon: string;
  children: SubTitles[];
};

export interface CourseFilterData {
  id: number;
  title: string;
  icon?: string;
  children?: SubTitles[] | SubCategories[];
}
