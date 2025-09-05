import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import EnrolledCourseCompo from "./_components/EnrolledCourseCompo";

export default async function EnrolledCourseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;

  return (
    <div>
      <DashboardHeader
        title="Enrolled Course Details"
        subtitle="Track your progress, lectures, and course resources"
      />
      <EnrolledCourseCompo id={id} />
    </div>
  );
}
