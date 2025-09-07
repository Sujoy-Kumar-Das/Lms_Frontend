/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Form from "@/_components/form/Form";
import Input from "@/_components/form/Input";
import {
  useGetSingleLecturesQuery,
  useUpdateLecturesMutation,
} from "@/lib/redux/api/lecture/lecture.api";
import { editLectureSchema } from "@/schemas/lecture.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import SelectCourse from "../../../_components/SelectCourse";
import SelectModuleByCourse from "../../../_components/SelectModule";

export default function LectureEditCompo({ id }: { id: string }) {
  const { data } = useGetSingleLecturesQuery(id);

  const [edit, { isLoading }] = useUpdateLecturesMutation();

  const defaultValue = {
    title: data?.title,
    video: data?.video,
    module: data?.module._id,
    course: data?.module?.course?._id,
  };

  const handleEditLecture = async (data: FieldValues) => {
    try {
      const res = await edit({ lectureId: id, data }).unwrap();

      if (res._id) {
        toast.success("Lecture updated successfully.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {data && (
        <Form
          onSubmit={handleEditLecture}
          resolver={zodResolver(editLectureSchema)}
          defaultValues={defaultValue}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <Input
              name="title"
              label="Title"
              type="text"
              placeholder="Enter Lecture Title"
            />

            <Input
              name="video"
              type="text"
              placeholder="Provide lecture video URL"
              label="Video URL"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <SelectCourse />

            <SelectModuleByCourse type="edit" />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 btn btn-primary"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin" /> Saving Changes...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </Form>
      )}
    </>
  );
}
