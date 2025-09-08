/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteCourseMutation } from "@/lib/redux/api/course/course.api";
import { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function DeleteCourseButton({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: ReactNode;
}) {
  const [deleteCourse, { isLoading }] = useDeleteCourseMutation();

  const handleDeleteCourse = async () => {
    try {
      const res = await deleteCourse(id).unwrap();

      if (res._id) {
        toast.success("Course deleted successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <button
      onClick={handleDeleteCourse}
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
        "Delete"
      )}
    </button>
  );
}
