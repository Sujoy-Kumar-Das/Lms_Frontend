import { ILectureData } from "@/interface/lecture.interface";
import Link from "next/link";
import { FaEdit, FaPlayCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

export default function AdminLectures({
  lectures,
}: {
  lectures: ILectureData[];
}) {
  return (
    <div className="border-t px-6 py-4 space-y-3">
      {lectures.length === 0 ? (
        <p className="text-red-500">No Lectures Found. Add a lecture</p>
      ) : (
        <>
          {lectures.map((lecture) => (
            <div
              key={lecture._id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FaPlayCircle className="w-5 h-5 text-text-primary" />
                <span className="text-text-primary">{lecture.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/dashboard/admin/lecture/edit/${lecture._id}`}
                  className=" text-secondary"
                >
                  <FaEdit />
                </Link>
                <button
                  //   onClick={() => handleDeleteLecture(lecture._id)}
                  className="text-red-500 "
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      <button
        // onClick={() => handleAddLecture(module._id)}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-2"
      >
        <FaPlusCircle /> Add Lecture
      </button>
    </div>
  );
}
