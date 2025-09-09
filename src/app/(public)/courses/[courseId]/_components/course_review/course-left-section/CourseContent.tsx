import ModuleList from "@/_components/shared/module_compo/ModuleList";
import { IModuleDetails } from "@/interface/module.interface";

export default function CourseContent({
  modules,
}: {
  modules: IModuleDetails[];
}) {
  console.log({ modules });
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        Course Content
      </h2>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-text-secondary">
          12 sections • 85 lectures • 42h total length
        </span>
        <button className="text-primary font-medium hover:underline">
          Expand all sections
        </button>
      </div>

      {/* Course Modules */}
      <ModuleList modules={modules} />
    </div>
  );
}
