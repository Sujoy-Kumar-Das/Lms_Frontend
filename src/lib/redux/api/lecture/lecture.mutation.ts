/* eslint-disable @typescript-eslint/no-explicit-any */
const create = (data: any) => ({
  url: `/lecture`,
  method: "POST",
  data,
});

export const lectureMutation = { create };
