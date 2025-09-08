import { ILectureData } from "./lecture.interface";
import { IModuleData } from "./module.interface";

export interface ICourse {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

export interface ICourseDetails extends ICourse {
  modules: (IModuleData & {
    lectures: ILectureData[];
  })[];
}
