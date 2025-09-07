import { IModuleData } from "./module.interface";

export interface ILectureDraftData {
  title: string;
  video: string;
  module: { title: string; _id: string };
  notes: string[];
}

export interface ILectureData {
  _id: string;
  title: string;
  module: IModuleData;
}
