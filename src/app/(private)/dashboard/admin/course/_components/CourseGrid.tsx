"use client";
import { ICourse } from "@/interface/course.interface";
import { useGetAllCourseQuery } from "@/lib/redux/api/course/course.api";
import CourseAdminCard from "./CourseAdminCard";

export default function CourseGrid() {
  const { data, isLoading } = useGetAllCourseQuery(undefined);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((course: ICourse) => (
        <CourseAdminCard key={course._id} course={course} />
      ))}
    </div>
  );
}
