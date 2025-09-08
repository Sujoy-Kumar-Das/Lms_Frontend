import { ICourse } from "./course.interface";
import { ILectureData } from "./lecture.interface";

export interface IModuleData {
  _id: string;
  title: string;
  moduleNumber: number;
  course: ICourse;
  isDeleted: boolean;
  status: "published" | "upcoming";
}

export interface IModuleDetails extends IModuleData {
  lectures: ILectureData[];
}
