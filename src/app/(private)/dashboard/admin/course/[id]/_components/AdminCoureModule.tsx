import { ICourseDetails } from "@/interface/course.interface";
import Link from "next/link";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AdminModuleCard from "./AdminModuleCard";

export default function AdminCourseModule({
  course,
}: {
  course: ICourseDetails;
}) {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const modules = course.modules;

  const handleModules = (id: string) => {
    setOpenModule((prev) => (prev ? null : id));
  };

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <AdminModuleCard
          key={module._id}
          module={module}
          onOpenModule={() => handleModules(module._id)}
          isModuleOpen={openModule === module._id}
        />
      ))}

      <Link
        href={`/dashboard/admin/module/create`}
        className="flex items-center gap-2 text-primary  font-medium text-sm"
      >
        <FaPlusCircle /> Add Module
      </Link>
    </div>
  );
}
