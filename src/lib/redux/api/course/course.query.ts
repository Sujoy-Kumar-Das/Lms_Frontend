const getUsersAllEnrolled = () => ({
  url: "/course/enroll/user",
  method: "GET",
});

const getEnrolledCourse = (enrollId: string) => ({
  url: `/course/enroll/${enrollId}`,
  method: "GET",
});

export const courseQuery = {
  getUsersAllEnrolled,
  getEnrolledCourse,
};
