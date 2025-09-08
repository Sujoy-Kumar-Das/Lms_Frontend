"use client";

import { IModuleDetails } from "@/interface/module.interface";
import Link from "next/link";
import { FaBookOpen, FaChevronDown, FaEdit } from "react-icons/fa";
import ModuleDeleteButton from "../../../module/_components/ModuleDeleteButton";
import AdminLectures from "./AdminLectures";

interface AdminModuleCardProps {
  module: IModuleDetails;
  onOpenModule: () => void;
  isModuleOpen: boolean;
}

export default function AdminModuleCard({
  module,
  onOpenModule,
  isModuleOpen,
}: AdminModuleCardProps) {
  return (
    <div
      key={module._id}
      className="bg-contrast shadow-md rounded-xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-6 py-4 bg-background">
        <button
          onClick={onOpenModule}
          className="flex items-center gap-2 font-semibold text-gray-800"
        >
          <FaBookOpen className="w-5 h-5 text-primary" />
          <span>
            Module {module.moduleNumber}: {module.title}
          </span>
          <FaChevronDown
            className={`w-4 h-4 transform transition-transform ${
              isModuleOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="flex gap-2">
          <Link
            href={`/dashboard/admin/module/edit/${module._id}`}
            className="text-secondary"
          >
            <FaEdit />
          </Link>

          <ModuleDeleteButton
            id={module._id}
            className=" bg-transparent text-red-500 shadow-none p-0 hover:bg-transparent"
          />
        </div>
      </div>

      {/* Lectures */}
      {isModuleOpen && <AdminLectures lectures={module.lectures} />}
    </div>
  );
}
