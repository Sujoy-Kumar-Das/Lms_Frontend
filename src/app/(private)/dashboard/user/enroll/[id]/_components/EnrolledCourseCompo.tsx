"use client";

import { useGetEnrolledCourseQuery } from "@/lib/redux/api/course/course.api";
// todo complete EnrolledCourseCompo
export default function EnrolledCourseCompo({ id }: { id: string }) {
  const { data, isLoading, error } = useGetEnrolledCourseQuery(id);

  return <div></div>;
}
