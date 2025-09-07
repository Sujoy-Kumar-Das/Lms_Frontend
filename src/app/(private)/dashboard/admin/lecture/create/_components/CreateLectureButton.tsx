/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useLectureContext from "@/hooks/useLectureContext";
import { useCreateLecturesMutation } from "@/lib/redux/api/lecture/lecture.api";
import { uploadFileToCloudinary } from "@/service/actions/cloudinary.service";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CreateLectureButton() {
  const { lectures, clearLecture } = useLectureContext();
  const [createLecture, apiResponse] = useCreateLecturesMutation();

  // post the lectures from local state to server
  const handlePublishLecture = async () => {
    try {
      // start loader
      apiResponse.isLoading = true;

      if (!lectures.length) {
        toast.error("No data for create lecture.");
      }

      // host pdf files in cloudinary
      for (const lecture of lectures) {
        const pdfFiles = lecture.notes;

        if (pdfFiles.length) {
          const urls = await Promise.all(
            pdfFiles.map((pdf) => uploadFileToCloudinary(pdf, "pdf"))
          );

          lecture.notesUrl = urls;
        } else {
          lecture.notesUrl = [];
        }
      }

      // prepare data for backend api call
      const lecturesData = lectures.map((lecture) => ({
        title: lecture.title,
        video: lecture.video,
        module: lecture.module.split("::")[1],
        notes: lecture.notesUrl ?? [],
      }));

      // call the api
      const res = await createLecture({ lecture: lecturesData }).unwrap();

      if (res._id) {
        toast.success("Lecturer created successfully");
        clearLecture();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const loading = apiResponse.isLoading;
  return (
    <button
      type="button"
      onClick={handlePublishLecture}
      disabled={loading}
      className="flex items-center justify-center gap-2 btn btn-primary"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" /> Creating...
        </>
      ) : (
        "Publish Lecture"
      )}
    </button>
  );
}
