const getAll = () => ({
  url: "/lecture",
  method: "GET",
});

const getSingle = (id: string) => ({
  url: `/lecture/${id}`,
  method: "GET",
});

export const lectureQuery = {
  getAll,
  getSingle,
};
