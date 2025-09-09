import { FieldValues } from "react-hook-form";

const create = (data: FieldValues) => ({
  url: `/course/`,
  method: "POST",
  data,
});

const editCourse = ({ id, data }: { id: string; data: FieldValues }) => ({
  url: `/course/${id}`,
  method: "PATCH",
  data,
});

const deleteCourse = (id: string) => ({
  url: `/course/${id}`,
  method: "DELETE",
});

export const courseMutation = {
  create,
  deleteCourse,
  editCourse,
};
