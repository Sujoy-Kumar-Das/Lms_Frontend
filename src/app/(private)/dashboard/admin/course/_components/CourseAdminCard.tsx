import { ICourse } from "@/interface/course.interface";
import Image from "next/image";
import Link from "next/link";
import DeleteCourseButton from "./DeleteCourseButton";

export default function CourseAdminCard({ course }: { course: ICourse }) {
  return (
    <div className="bg-contrast rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-secondary">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={course.thumbnail}
          height={400}
          width={400}
          alt={course.title}
          className="w-full h-full object-cover transition-transform"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-text-primary line-clamp-1">
          {course.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2">
          {course.shortDescription}
        </p>
        <p className="text-primary font-bold text-base">${course.price}</p>

        <div className="flex justify-between items-center pt-3 border-t border-background">
          <Link
            href={`/dashboard/admin/course/detail/${course._id}`}
            className="px-3 py-1 text-sm rounded-lg btn btn-light "
          >
            Details
          </Link>
          <div className="flex gap-2">
            <Link
              href={`/dashboard/admin/course/edit/${course._id}`}
              className="px-3 py-1 text-sm rounded-lg btn btn-secondary "
            >
              Edit
            </Link>
            <DeleteCourseButton id={course._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
