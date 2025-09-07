/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateCourseMutation } from "@/lib/redux/api/course/course.api";
import { uploadFileToCloudinary } from "@/service/actions/cloudinary.service";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import CourseForm from "../../_components/CourseForm";

const courseDefaultValue = {
  name: "",
  price: 0,
  thumbnail: "",
  shortDescription: "",
  description: "",
};

export default function CreateCourseForm() {
  const [create, apiResponse] = useCreateCourseMutation();

  const handleCreateCourse = async (data: FieldValues) => {
    try {
      // set post create loading;
      apiResponse.isLoading = true;

      // upload image to cloudinary
      const imageURL = await uploadFileToCloudinary(data.thumbnail, "image");

      //   set the upload url
      data.thumbnail = imageURL;

      //   create course api call;
      const res = await create(data).unwrap();
      console.log(res);

      if (res._id) {
        toast.success("Course created successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create course.");
    }
  };
  return (
    <div className="p-6">
      <CourseForm
        onSubmit={handleCreateCourse}
        defaultValues={courseDefaultValue}
        loading={apiResponse.isLoading}
        type="create"
      />
    </div>
  );
}
