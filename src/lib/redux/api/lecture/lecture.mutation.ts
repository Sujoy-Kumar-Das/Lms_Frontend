import { FieldValues } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
const create = (data: any) => ({
  url: `/lecture`,
  method: "POST",
  data,
});

const update = ({
  lectureId,
  data,
}: {
  lectureId: string;
  data: FieldValues;
}) => ({
  url: `/lecture/${lectureId}`,
  method: "PATCH",
  data,
});

const remove = (lectureId: string) => ({
  url: `/lecture/${lectureId}`,
  method: "DELETE",
});

export const lectureMutation = { create, update, remove };
