/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCourse } from "@/service/actions/course.service";
import CourseCard from "./CourseCard";

export default async function CourseList() {
  const courses = await getAllCourse();

  console.log({ courses });
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course: any) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
