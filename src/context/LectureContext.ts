import { ILectureDraftData } from "@/interface/lecture.interface";
import { createContext } from "react";

interface ILectureContextProps {
  onAddLecture: (data: ILectureDraftData) => Promise<void>;
  onRemoveLecture: (id: string) => void;
  clearLecture: () => void;
  lectures: ILectureDraftData[];
}

const LectureContext = createContext<ILectureContextProps | null>(null);

export default LectureContext;
