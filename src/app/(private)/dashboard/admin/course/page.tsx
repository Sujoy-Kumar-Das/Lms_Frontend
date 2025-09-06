import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import Link from "next/link";
import CourseGrid from "./_components/CourseGrid";

export default function CourseManagementPage() {
  return (
    <section className="space-y-6">
      {/* Page Header */}
      <DashboardHeader
        title="Course Management"
        subtitle="Manage, create, and organize your courses"
      />

      <div className="flex justify-end px-6 py-2">
        <Link
          href={`/dashboard/admin/course/create/`}
          className="px-5 py-2 rounded-xl btn btn-primary shadow-md"
        >
          + Add New Course
        </Link>
      </div>

      {/* Course Grid */}
      <CourseGrid />
    </section>
  );
}
