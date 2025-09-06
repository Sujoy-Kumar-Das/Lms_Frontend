import { FieldValues } from "react-hook-form";

const create = (data: FieldValues) => ({
  url: `/module/`,
  method: "POST",
  data,
});

const edit = ({ moduleId, data }: { moduleId: string; data: FieldValues }) => ({
  url: `/module/${moduleId}`,
  method: "PATCH",
  data,
});

const deleteModule = (id: string) => ({
  url: `/module/${id}`,
  method: "DELETE",
});

export const moduleMutation = {
  edit,
  create,
  deleteModule,
};
