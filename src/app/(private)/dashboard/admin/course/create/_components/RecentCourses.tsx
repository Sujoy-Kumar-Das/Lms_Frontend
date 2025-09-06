import Link from "next/link";
import CourseGrid from "../../_components/CourseGrid";

export default function RecentCourses() {
  return (
    <div>
      <div className=" flex justify-between items-center px-6 ">
        <h2 className="text-3xl font-bold text-text-primary ">
          Recent Courses
        </h2>

        <Link href={"/dashboard/admin/course"} className="btn btn-primary ">
          View All Courses
        </Link>
      </div>

      {/* Course Grid */}
      <CourseGrid />
    </div>
  );
}
