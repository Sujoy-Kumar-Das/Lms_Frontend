import DangerouslySetInnerHTML from "@/_components/shared/DangerouslySetInnerHTML/DangerouslySetInnerHTML";
import { ICourse } from "@/interface/course.interface";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteCourseButton from "../../_components/DeleteCourseButton";

export default function AdminCourseDetails({ course }: { course: ICourse }) {
  return (
    <div className="bg-contrast rounded-2xl shadow-lg overflow-hidden mb-8">
      <Image
        height={500}
        width={500}
        src={course?.thumbnail}
        alt={course?.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-text-primary">
            {course?.title}
          </h1>
          <div className="flex gap-3">
            <Link
              href={`/dashboard/admin/course/edit/${course._id}`}
              className=" btn btn-secondary btn-sm"
            >
              <FaEdit /> Edit
            </Link>

            <DeleteCourseButton id={course._id} className=" btn-sm">
              <FaTrash /> Delete
            </DeleteCourseButton>
          </div>
        </div>
        <p className=" text-text-secondary mt-2">{course?.shortDescription}</p>

        <DangerouslySetInnerHTML text={course.description} />

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary ">
            ${course?.price}
          </span>
        </div>
      </div>
    </div>
  );
}
