import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import { getSingleCourse } from "@/service/actions/course.service";
import EditCourseForm from "./_components/EditCourseForm";

export default async function EditCoursePage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;

  return (
    <section className="space-y-6">
      {/* Page Header */}
      <DashboardHeader
        title="Edit Course"
        subtitle="Fill out the form below to add a new course to the platform"
      />

      {/* Form */}
      <EditCourseForm id={id} />
    </section>
  );
}
