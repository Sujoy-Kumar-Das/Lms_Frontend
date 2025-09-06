/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useEditModuleMutation,
  useGetSingleModuleQuery,
} from "@/lib/redux/api/module/module.api";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import ModuleForm from "../../../_components/ModuleForm";

export default function ModuleEditCompo({ id }: { id: string }) {
  const { data } = useGetSingleModuleQuery(id);

  const [edit, { isLoading }] = useEditModuleMutation();

  const handleEditModule = async (data: FieldValues) => {
    try {
      const res = await edit({ moduleId: id, data }).unwrap();
      if (res._id) {
        toast.success("Module updated successfully.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const defaultValue = {
    title: data?.title,
    course: data?.course?._id,
  };

  return (
    <div className="p-6 ">
      {data && (
        <ModuleForm
          loading={isLoading}
          defaultValues={defaultValue}
          type="edit"
          onSubmit={handleEditModule}
        />
      )}
    </div>
  );
}
