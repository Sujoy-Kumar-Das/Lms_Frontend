const getAllCourse = () => ({
  url: `/course/`,
  method: "GET",
});

const getSingleCourse = (id: string) => ({
  url: `/course/${id}`,
  method: "GET",
});

export const courseQuery = {
  getAllCourse,
  getSingleCourse,
};
