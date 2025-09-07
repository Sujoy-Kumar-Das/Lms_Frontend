/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Form from "@/_components/form/Form";
import Input from "@/_components/form/Input";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import useLectureContext from "@/hooks/useLectureContext";
import { ILectureDraftData } from "@/interface/lecture.interface";
import { createLectureSchema } from "@/schemas/lecture.schema";
import { uploadFileToCloudinary } from "@/service/actions/cloudinary.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import SelectCourse from "../../_components/SelectCourse";
import SelectModuleByCourse from "../../_components/SelectModule";
import CreateLectureButton from "./CreateLectureButton";
import LecturePdfCompo from "./LecturePdfCompo";

const defaultValues = {
  title: "",
  video: "",
  module: "",
  notes: [],
};

export default function CreateLectureForm() {
  const { onAddLecture, lectures } = useLectureContext();

  const handleAddLecture = async (data: FieldValues) => {
    try {
      const isExitsTitle = lectures.find(
        (lecture) =>
          lecture?.title?.toLowerCase() === data?.title?.toLowerCase()
      );

      if (isExitsTitle) {
        toast.info("A lecture already exists in your module with this title");
      }

      // upload image to cloudinary
      if (data.notes && data.notes.length > 0) {
        const urls = await Promise.all(
          data.notes.map((pdf: File) => uploadFileToCloudinary(pdf, "pdf"))
        );
        data.notes = urls;
      } else {
        data.notes = [];
      }

      const splitModule = data.module.split("::");

      data.module = {
        title: splitModule[0],
        _id: splitModule[1],
      };

      toast.success("Lecture added to draft");

      onAddLecture(data as ILectureDraftData);
    } catch (error: any) {
      console.log({ error });
      toast.error(error.message);
    }
  };
  return (
    <div className="rounded-xl shadow-sm p-6 ">
      <CommonHeader
        title="Create New Lecture"
        subtitle="Fill in the details to add a new lecture to your course"
        className=" text-left w-full max-w-full mb-5"
      />

      <Form
        onSubmit={handleAddLecture}
        resolver={zodResolver(createLectureSchema)}
        defaultValues={defaultValues}
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

          <SelectModuleByCourse />
        </div>

        <LecturePdfCompo />

        <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
          <button
            type="submit"
            className="px-5 py-2.5 rounded font-medium  shadow-sm"
          >
            Save Draft
          </button>

          <CreateLectureButton />
        </div>
      </Form>
    </div>
  );
}
