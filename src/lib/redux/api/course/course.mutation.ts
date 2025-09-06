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

export const courseMutation = {
  enroll,
  create,
};
