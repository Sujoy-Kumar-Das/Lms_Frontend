import CreateLectureForm from "./CreateLectureForm";
import LectureFieldsList from "./LectureFieldsList";

export default function CreateLectureCompo() {
  return (
    <div className="p-6 border-none flex flex-col gap-5">
      {/* create lecturer form */}
      <CreateLectureForm />

      {/* lecturers list */}
      <LectureFieldsList />
    </div>
  );
}
