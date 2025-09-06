/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteCourseMutation } from "@/lib/redux/api/course/course.api";
import { toast } from "react-toastify";

export default function DeleteCourseButton({ id }: { id: string }) {
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
      className="px-3 py-1 text-sm rounded-lg btn btn-danger"
    >
      Delete
    </button>
  );
}
