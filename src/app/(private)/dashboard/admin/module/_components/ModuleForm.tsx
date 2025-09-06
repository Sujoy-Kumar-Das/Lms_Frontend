"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Form from "@/_components/form/Form";
import Input from "@/_components/form/Input";
import SelectInput from "@/_components/form/SelectInput";
import useGetCourseOptions from "@/hooks/useGetCourseOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import moduleValidationSchema from "./module.validation.schema";

interface ModuleFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  defaultValues: Record<string, any>;
  loading: boolean;
  type: "create" | "edit";
}

export default function ModuleForm({
  onSubmit,
  defaultValues,
  loading = false,
  type,
}: ModuleFormProps) {
  const courseOptions = useGetCourseOptions();
  const buttonText = type === "edit" ? "Update Module" : "Create Module";
  const loadingText = type === "edit" ? "Updating..." : "Creating...";

  const validationSchema = moduleValidationSchema[type];

  return (
    <div className=" max-w-xl mx-auto bg-background rounded-2xl shadow-lg p-6 md:p-8 border border-none">
      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        resolver={zodResolver(validationSchema)}
      >
        <div className=" flex-col justify-center gap-6">
          <Input
            name="title"
            type="text"
            label="Title"
            placeholder="Enter Course Title"
          />
          <SelectInput
            name="course"
            options={courseOptions}
            label="Select a course"
            placeholder="Select a course"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <span className="flex items-center text-contrast">
                <FaSpinner className=" animate-spin mr-2" /> {loadingText}
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </Form>
    </div>
  );
}
