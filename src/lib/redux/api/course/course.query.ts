const getUsersAllEnrolled = () => ({
  url: "/course/enroll/user",
  method: "GET",
});

const getEnrolledCourse = (enrollId: string) => ({
  url: `/course/enroll/${enrollId}`,
  method: "GET",
});

const getAllCourse = () => ({
  url: `/course/`,
  method: "GET",
});

export const courseQuery = {
  getUsersAllEnrolled,
  getEnrolledCourse,
  getAllCourse,
};
