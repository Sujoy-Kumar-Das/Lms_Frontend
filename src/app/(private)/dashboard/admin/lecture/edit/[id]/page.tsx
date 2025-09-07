import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import LectureEditCompo from "./_components/LectureEditCompo";

export default async function LectureEditPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;
  return (
    <section>
      <DashboardHeader
        title="Edit Lecture"
        subtitle="Fill out the form below for edit Lecture to the platform"
      />
      <div className=" p-6">
        <LectureEditCompo id={id} />
      </div>
    </section>
  );
}
