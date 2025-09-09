"use client";

import ModuleContext from "@/context/ModuleContsxt";
import { ILectureData } from "@/interface/lecture.interface";
import { ReactNode, useState } from "react";

interface IInitialValue {
  module: string | null;
  lecture: ILectureData | null;
}

export default function ModuleContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [item, setItem] = useState<IInitialValue>({
    module: null,
    lecture: null,
  });

  const handleModules = (id: string) => {
    setItem((prev) =>
      prev.module === id ? { ...prev, module: null } : { ...prev, module: id }
    );
  };

  const handleLecture = (lecture: ILectureData) => {
    setItem((prev) => ({ ...prev, lecture }));
  };

  return (
    <ModuleContext.Provider
      value={{
        selectedModule: item.module,
        selectedLecture: item.lecture,
        onToggleModule: handleModules,
        onToggleLecture: handleLecture,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
}
