import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import ModuleCreateCompo from "./_components/ModuleCreateCompo";

export default function CreateModulePage() {
  return (
    <div>
      <DashboardHeader
        title="Course Modules"
        subtitle="Manage, create, and organize your modules"
      />

      <ModuleCreateCompo />
    </div>
  );
}
