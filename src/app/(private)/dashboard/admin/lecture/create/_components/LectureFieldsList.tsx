"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useLectureContext from "@/hooks/useLectureContext";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function LectureFieldsList() {
  const { lectures, onRemoveLecture } = useLectureContext();

  const handleRemoveLecture = (id: string) => {
    try {
      const res: any = onRemoveLecture(id);

      if (res.message) {
        toast.info(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {lectures.length > 0 && (
        <div className=" flex-1">
          <h3 className="text-lg font-semibold mb-3">Added Lectures</h3>
          <ul className="space-y-3">
            {lectures?.map((lecture) => (
              <li
                key={lecture.title}
                className="flex items-center justify-between bg-background p-3 rounded-lg shadow"
              >
                <div>
                  <p className="font-medium">{lecture.title}</p>
                  <p className="text-sm text-text-secondary">
                    Module: {lecture.module?.title}
                  </p>
                </div>
                <button
                  className="btn btn-danger p-2"
                  onClick={() => handleRemoveLecture(lecture.title)}
                >
                  <FaTrash className=" text-xs" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
