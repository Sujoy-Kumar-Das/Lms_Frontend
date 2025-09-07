"use client";

import { useGetAllLecturesQuery } from "@/lib/redux/api/lecture/lecture.api";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

export default function LectureTable() {
  const { data } = useGetAllLecturesQuery(undefined);

  console.log({ data });
  return (
    <div className="overflow-x-auto bg-background rounded-xl shadow-md p-6">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Title
            </th>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Course Name
            </th>
            <th className="px-6 py-3 text-text-primary font-medium uppercase text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((lecture) => (
            <tr key={lecture._id} className=" hover:bg-background">
              <td className="px-6 py-4">{lecture?.title}</td>
              <td className="px-6 py-4">
                {lecture?.module?.title || "Module Name"}
              </td>
              <td className="px-6 py-4 flex gap-3">
                <Link
                  href={`/dashboard/admin/lecture/edit/${lecture._id}`}
                  className="text-primary"
                >
                  <FiEdit size={18} />
                </Link>
              </td>
            </tr>
          ))}
          {data?.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-6 text-gray-400 italic">
                No Lecture found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
