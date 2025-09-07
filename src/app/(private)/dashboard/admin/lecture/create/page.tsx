import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import LectureContextProvider from "@/providers/LectureContextProvider";
import CreateLectureCompo from "./_components/CreateLectureCompo";

export default function CreateLecturePage() {
  return (
    <section>
      {/* Page Header */}
      <DashboardHeader
        title="Create New Lecture"
        subtitle="Fill out the form below to add a new Lecture to the platform"
      />

      <LectureContextProvider>
        <CreateLectureCompo />
      </LectureContextProvider>
    </section>
  );
}
