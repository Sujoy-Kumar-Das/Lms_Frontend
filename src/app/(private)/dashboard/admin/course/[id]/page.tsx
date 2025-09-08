import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import CourseDetailsCompo from "./_components/CourseDetailsCompo";

export default async function CourseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;
  return (
    <div>
      <DashboardHeader title="Course Details" subtitle="" />
      <CourseDetailsCompo id={id} />
    </div>
  );
}
