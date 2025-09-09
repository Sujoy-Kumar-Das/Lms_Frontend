"use client";

import useModuleContext from "@/hooks/useModuleContext";
import { IModuleDetails } from "@/interface/module.interface";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";
import LectureList from "./LectureList";

interface ModuleListsProps {
  module: IModuleDetails;
}

export default function ModuleItem({ module }: ModuleListsProps) {
  const { onToggleModule, selectedModule } = useModuleContext();

  const isSelected = selectedModule === module._id;
  return (
    <div className="bg-contrast shadow-md rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 bg-background">
        <button
          onClick={() => onToggleModule(module._id)}
          className="flex items-center gap-2 font-semibold text-gray-800"
        >
          <FaBookOpen className="w-5 h-5 text-primary" />
          <span>
            Module {module.moduleNumber}: {module.title}
          </span>
          <FaChevronDown
            className={`w-4 h-4 transform transition-transform ${
              isSelected ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Lectures */}
      {isSelected && <LectureList lectures={module.lectures} />}
    </div>
  );
}
