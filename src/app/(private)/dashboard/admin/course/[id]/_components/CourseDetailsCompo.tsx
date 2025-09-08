"use client";

import { useGetSingleCourseQuery } from "@/lib/redux/api/course/course.api";
import AdminCourseModule from "./AdminCoureModule";
import AdminCourseDetails from "./AdminCourseDetails";

export default function CourseDetailsCompo({ id }: { id: string }) {
  const { data } = useGetSingleCourseQuery(id);

  return (
    <div className="py-8 px-6">
      {data && (
        <>
          <AdminCourseDetails course={data} />
          <AdminCourseModule course={data} />
        </>
      )}
    </div>
  );
}
