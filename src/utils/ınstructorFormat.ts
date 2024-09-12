export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

export const formatCourseCount = (count: number): string => {
  return count.toString().padStart(2, "0");
};
