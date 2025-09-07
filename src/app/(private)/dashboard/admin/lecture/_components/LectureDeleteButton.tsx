/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteLecturesMutation } from "@/lib/redux/api/lecture/lecture.api";
import { FaSpinner } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

export default function LectureDeleteButton({ id }: { id: string }) {
  const [remove, { isLoading }] = useDeleteLecturesMutation();

  const handleDeleteLecture = async () => {
    try {
      const res = await remove(id).unwrap();

      if (res._id) {
        toast.success("Lecture deleted successfully.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <button
      onClick={handleDeleteLecture}
      disabled={isLoading}
      className=" text-red-500"
    >
      {isLoading ? (
        <FaSpinner size={18} className="animate-spin" />
      ) : (
        <FiTrash size={18} />
      )}
    </button>
  );
}
