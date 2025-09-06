import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import ModuleEditCompo from "./components/ModuleEditCompo";

export default async function EditModulePage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;

  return (
    <div>
      <DashboardHeader
        title="Course Modules"
        subtitle="Manage, create, and organize your modules"
      />

      <ModuleEditCompo id={id} />
    </div>
  );
}
