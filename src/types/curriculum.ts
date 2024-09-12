type curriculumContent = {
  type: string;
  title: string;
  size?: number;
  duration?: number;
};
export type curriculum = {
  title: string;
  lectures: number;
  totalDuration: number;
  content: curriculumContent[];
};
