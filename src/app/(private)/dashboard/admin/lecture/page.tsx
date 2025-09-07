import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import Link from "next/link";
import LectureTable from "./_components/LectureTable";

export default function LecturePage() {
  return (
    <section className="space-y-6">
      <DashboardHeader
        title="Course Lectures"
        subtitle="Manage, create, and organize your lectures"
      />
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <Link
            href={`/dashboard/admin/lecture/create/`}
            className="px-5 py-2 btn btn-primary"
          >
            + Add New Lecture
          </Link>
        </div>

        <LectureTable />
      </div>
    </section>
  );
}
