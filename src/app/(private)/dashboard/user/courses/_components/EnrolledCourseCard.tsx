import { IEnrollCourse } from "@/interface/enroll_course.interface";
import Image from "next/image";
import Link from "next/link";

export default function EnrolledCourseCard({
  course,
}: {
  course: IEnrollCourse;
}) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 card-hover">
      <Image
        src={course?.course?.thumbnail}
        alt={course?.course?.title}
        height={400}
        width={400}
        className="w-full h-48 object-cover"
      />
      <div className={"p-6"}>
        <h3 className="text-base font-normal text-text-primary mt-2">
          {course?.course?.title}
        </h3>
        <div className="mt-3 flex items-center justify-end">
          <Link
            className="btn btn-primary py-1 px-2 text-sm font-normal"
            href={`/dashboard/user/enroll/${course?._id}`}
          >
            Continue Course
          </Link>
        </div>
      </div>
    </div>
  );
}
