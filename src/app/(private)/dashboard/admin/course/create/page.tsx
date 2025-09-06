import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import CreateCourseForm from "./_components/CreateCourseForm";
import RecentCourses from "./_components/RecentCourses";

export default function CreateCoursePage() {
  return (
    <section className="space-y-6">
      {/* Page Header */}
      <DashboardHeader
        title="Create New Course"
        subtitle="Fill out the form below to add a new course to the platform"
      />

      {/* Form */}
      <CreateCourseForm />

      <RecentCourses />
    </section>
  );
}
