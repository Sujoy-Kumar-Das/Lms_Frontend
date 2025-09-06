import { FieldValues } from "react-hook-form";

const enroll = (id: string) => ({
  url: `/course/${id}/enroll`,
  method: "POST",
});

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
  enroll,
  create,
  deleteCourse,
  editCourse,
};
