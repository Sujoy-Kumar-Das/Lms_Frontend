const getAllByStudent = () => ({
  url: "/enroll",
  method: "GET",
});

const getSingleByStudent = (enrollId: string) => ({
  url: `/enroll/${enrollId}`,
  method: "GET",
});

export const enrollQuery = {
  getAllByStudent,
  getSingleByStudent,
};
