import useModuleContext from "@/hooks/useModuleContext";
import { ILectureData } from "@/interface/lecture.interface";
import { FaPlayCircle } from "react-icons/fa";

export default function LectureList({
  lectures,
}: {
  lectures: ILectureData[];
}) {
  const { onToggleLecture } = useModuleContext();
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
              <button
                className="flex items-center gap-3"
                onClick={() => onToggleLecture(lecture)}
              >
                <FaPlayCircle className="w-5 h-5 text-text-primary" />
                <span className="text-text-primary">{lecture.title}</span>
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
