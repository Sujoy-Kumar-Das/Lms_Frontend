import { ILectureData } from "@/interface/lecture.interface";
import { createContext } from "react";

interface ModuleContextProps {
  selectedModule: string | null;
  selectedLecture: ILectureData | null;
  onToggleModule: (id: string) => void;
  onToggleLecture: (lecture: ILectureData) => void;
}

const ModuleContext = createContext<ModuleContextProps | null>(null);

export default ModuleContext;
