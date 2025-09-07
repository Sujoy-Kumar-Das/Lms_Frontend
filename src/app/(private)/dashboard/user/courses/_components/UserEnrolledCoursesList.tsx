"use client";
import { IEnrollCourse } from "@/interface/enroll_course.interface";
import { useGetUserAllEnrolledCourseQuery } from "@/lib/redux/api/course/course.api";
import EnrolledCourseCard from "./EnrolledCourseCard";

export default function UserEnrolledCoursesList() {
  const { data, isLoading, error } =
    useGetUserAllEnrolledCourseQuery(undefined);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-6 gap-6">
      {data?.map((course: IEnrollCourse) => (
        <EnrolledCourseCard course={course} key={course._id} />
      ))}
    </div>
  );
}
