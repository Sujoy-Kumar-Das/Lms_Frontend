"use client";
import SelectInput from "@/_components/form/SelectInput";
import { IModuleData } from "@/interface/module.interface";
import { useGetModuleByCourseQuery } from "@/lib/redux/api/module/module.api";
import { useFormContext } from "react-hook-form";

export default function SelectModuleByCourse() {
  const { watch } = useFormContext();
  const selectedCourseId = watch("course");

  const { data, isLoading } = useGetModuleByCourseQuery(selectedCourseId);

  // prepare the select options for modules
  // note module id and module title are stored as value of module options
  // because need to show in the UI module name
  // extract module _id from module value ::

  const moduleOptions = data?.map((module: IModuleData) => ({
    label: module.title,
    value: `${module.title}::${module._id}`,
  }));

  const placeholder = isLoading
    ? "Loading modules..."
    : !selectedCourseId
    ? "Select a course first."
    : !moduleOptions || moduleOptions.length === 0
    ? "No Module. Create a Module"
    : "Select Module";

  return (
    <SelectInput
      name="module"
      options={moduleOptions || []}
      label="Model"
      placeholder={placeholder}
    />
  );
}
