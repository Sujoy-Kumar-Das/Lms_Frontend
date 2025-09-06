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
  lessons: ILesson[];
  enrolledCount: number;
  rating: number;
  reviews: IReview[];
}

export interface ILesson {
  _id: string;
  title: string;
  content: string;
  duration?: number; // in minutes
}

export interface IReview {
  _id: string;
  user: string; // or IUser
  rating: number;
  comment: string;
  createdAt: string;
}
