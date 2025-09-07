/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useLectureContext from "@/hooks/useLectureContext";
import { useCreateLecturesMutation } from "@/lib/redux/api/lecture/lecture.api";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CreateLectureButton() {
  const { lectures, clearLecture } = useLectureContext();
  const [createLecture, { isLoading }] = useCreateLecturesMutation();

  // post the lectures from local state to server
  const handlePublishLecture = async () => {
    try {
      if (!lectures.length) {
        toast.error("No data for create lecture.");
      }

      // prepare data for backend api call
      const lecturesData = lectures.map((lecture) => ({
        title: lecture.title,
        video: lecture.video,
        module: lecture.module._id,
        notes: lecture.notes ?? [],
      }));

      // call the api
      const res = await createLecture({ lecture: lecturesData }).unwrap();

      if (res.length) {
        toast.success("Lecturer created successfully");
        clearLecture();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePublishLecture}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 btn btn-primary"
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" /> Creating...
        </>
      ) : (
        "Publish Lecture"
      )}
    </button>
  );
}
