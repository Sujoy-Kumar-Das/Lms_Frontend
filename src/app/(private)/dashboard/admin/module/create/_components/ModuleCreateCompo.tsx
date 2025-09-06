/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateModuleMutation } from "@/lib/redux/api/module/module.api";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import ModuleForm from "../../_components/ModuleForm";

export default function ModuleCreateCompo() {
  const [create, { isLoading }] = useCreateModuleMutation();

  const handleCreateModule = async (data: FieldValues) => {
    try {
      const res = await create(data).unwrap();

      if (res._id) {
        toast.success("Module created successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="p-6 ">
      <ModuleForm
        loading={isLoading}
        defaultValues={{ title: "", course: "" }}
        type="create"
        onSubmit={handleCreateModule}
      />
    </div>
  );
}
