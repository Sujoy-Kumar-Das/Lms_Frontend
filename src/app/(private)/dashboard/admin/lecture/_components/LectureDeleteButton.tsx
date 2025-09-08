/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteLecturesMutation } from "@/lib/redux/api/lecture/lecture.api";
import { ReactNode } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function LectureDeleteButton({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: ReactNode;
}) {
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
      type="button"
      className={twMerge("btn btn-danger", className)}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center text-contrast">
          <FaSpinner className=" animate-spin mr-2" /> Deleting...
        </span>
      ) : children ? (
        children
      ) : (
        <FaTrash />
      )}
    </button>
  );
}
