"use client";
import { useGetAllModulesQuery } from "@/lib/redux/api/module/module.api";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import ModuleDeleteButton from "./ModuleDeleteButton";
import { IModuleData } from "@/interface/module.interface";

export default function ModuleTable() {
  const { data, isLoading } = useGetAllModulesQuery(undefined);

  return (
    <div className="overflow-x-auto bg-background rounded-xl shadow-md">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Title
            </th>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Course Name
            </th>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((module: IModuleData) => (
            <tr key={module._id}>
              <td className="px-6 py-4">{module.title}</td>
              <td className="px-6 py-4">{module.course.title}</td>
              <td className="px-6 py-4 flex gap-3">
                <Link
                  href={`/dashboard/admin/module/edit/${module._id}`}
                  className="text-primary"
                >
                  <FiEdit size={18} />
                </Link>
                <ModuleDeleteButton id={module._id} />
              </td>
            </tr>
          ))}
          {data?.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-6 text-gray-400 italic">
                No modules found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
