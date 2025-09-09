"use client";
import { IEnrollCourse } from "@/interface/enroll_course.interface";
import { useGetAllEnrolledCourseByStudentQuery } from "@/lib/redux/api/enroll/enroll.api";
import EnrolledCourseCard from "./EnrolledCourseCard";

export default function UserEnrolledCoursesList() {
  const { data, isLoading, error } =
    useGetAllEnrolledCourseByStudentQuery(undefined);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-6 gap-6">
      {data?.map((course: IEnrollCourse) => (
        <EnrolledCourseCard course={course} key={course._id} />
      ))}
    </div>
  );
}
