/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/(private)/dashboard/admin/course/_components/CourseForm.tsx

"use client";
import Form from "@/_components/form/Form";
import Input from "@/_components/form/Input";
import InputFile from "@/_components/form/InputFile";
import InputTextEditor from "@/_components/form/InputTextEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { courseValidationSchema } from "./course.reslover";

interface CourseFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  defaultValues: Record<string, any>;
  loading: boolean;
  type: "create" | "edit";
}

export default function CourseForm({
  onSubmit,
  defaultValues,
  loading = false,
  type,
}: CourseFormProps) {
  const buttonText = type === "edit" ? "Update Course" : "Create Course";
  const loadingText = type === "edit" ? "Updating..." : "Creating...";

  const validationSchema = courseValidationSchema[type];

  return (
    <div className="bg-background rounded-2xl shadow-lg p-6 md:p-8 border border-none">
      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        resolver={zodResolver(validationSchema)}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="title"
            type="text"
            label="Title"
            placeholder="Enter Course Title"
          />
          <Input
            name="shortDescription"
            type="text"
            label="Short Description"
            placeholder="Enter Course Short Description"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="price"
            type="number"
            label="Price"
            placeholder="Enter Course Price"
          />
          <InputFile name="thumbnail" label="Thumbnail" />
        </div>

        <div className=" grid grid-cols-1 gap-6">
          <InputTextEditor
            name="description"
            label="Description"
            placeholder="Enter Course Description"
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
