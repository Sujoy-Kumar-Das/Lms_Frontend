const getAll = () => ({
  url: "/module",
  method: "GET",
});

const getSingle = (id: string) => ({
  url: `/module/${id}`,
  method: "GET",
});

export const moduleQuery = {
  getAll,
  getSingle,
};
