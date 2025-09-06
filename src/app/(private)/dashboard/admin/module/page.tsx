import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import Link from "next/link";
import ModuleTable from "./_components/ModuleTable";

export default function ModulePage() {
  return (
    <section className="space-y-6 p-6">
      {/* Page Header */}
      <DashboardHeader
        title="Course Modules"
        subtitle="Manage, create, and organize your modules"
      />

      {/* Add Module Button */}
      <div className="flex justify-end mb-4">
        <Link
          href={`/dashboard/admin/module/create/`}
          className="px-5 py-2 btn btn-primary"
        >
          + Add New Module
        </Link>
      </div>

      {/* Modules Table */}

      <ModuleTable />
    </section>
  );
}
