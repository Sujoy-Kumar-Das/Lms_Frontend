"use client";

import { IModuleDetails } from "@/interface/module.interface";
import ModuleItem from "./ModulesItem";

interface ModuleListProps {
  modules: IModuleDetails[];
}

export default function ModuleList({ modules }: ModuleListProps) {
  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <ModuleItem key={module._id} module={module} />
      ))}
    </div>
  );
}
