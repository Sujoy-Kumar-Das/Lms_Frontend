"use client";

import { ICourse } from "@/interface/course.interface";
import { useGetAllCourseQuery } from "@/lib/redux/api/course/course.api";

export default function useGetCourseOptions() {
  const { data } = useGetAllCourseQuery(undefined);

  return data?.map((course: ICourse) => ({
    id: course._id,
    label: course.title,
    value: course._id,
  }));
}
