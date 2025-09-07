import { ICourse } from "./course.interface";

export interface IModuleData {
  _id: string;
  title: string;
  moduleNumber: number;
  course: ICourse;
  isDeleted: boolean;
  status: "published" | "upcoming";
}
