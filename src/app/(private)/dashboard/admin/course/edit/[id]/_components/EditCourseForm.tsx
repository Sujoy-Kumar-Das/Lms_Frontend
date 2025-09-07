/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useEditCourseMutation,
  useGetSingleCourseQuery,
} from "@/lib/redux/api/course/course.api";
import { uploadFileToCloudinary } from "@/service/actions/cloudinary.service";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import CourseForm from "../../../_components/CourseForm";

interface IEditCourseDefaultValue {
  title: string;
  price: number;
  thumbnail: string;
  shortDescription: string;
  description: string;
}

export default function EditCourseForm({ id }: { id: string }) {
  const { data, isLoading } = useGetSingleCourseQuery(id);

  const defaultValue = {
    title: data?.title,
    thumbnail: data?.thumbnail,
    description: data?.description,
    shortDescription: data?.shortDescription,
    price: data?.price,
  };

  const [edit, apiResponse] = useEditCourseMutation();

  const handleEditCourse = async (data: FieldValues) => {
    try {
      // start course loading;
      apiResponse.isLoading = true;

      if (data.thumbnail) {
        // upload image to cloudinary
        data.thumbnail = await uploadFileToCloudinary(data.thumbnail, "image");
      }

      //   create course api call;
      const res = await edit({ id, data }).unwrap();
      console.log(res);

      if (res._id) {
        toast.success("Course updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to update course.");
    }
  };
  return (
    <div className="p-6">
      {!isLoading && (
        <CourseForm
          onSubmit={handleEditCourse}
          defaultValues={defaultValue}
          loading={apiResponse.isLoading}
          type="edit"
        />
      )}
    </div>
  );
}
