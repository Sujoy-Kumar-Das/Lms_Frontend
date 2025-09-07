import { ICourse } from "./course.interface";
import { ILectureData } from "./lecture.interface";
import { IUser } from "./user.interface";

export interface IEnrollCourse {
  _id: string;
  user: IUser;
  course: ICourse;
  isCompleted: boolean;
  unlockedLectures: ILectureData[];
}
