import { FaDownload } from "react-icons/fa";
import { RiFileTextLine } from "react-icons/ri";

export default function LectureNotes({ notes }: { notes: string[] }) {
  return (
    <div className="border-t pt-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <RiFileTextLine className="text-xl" />
        Resources
      </h3>
      {notes && notes.length > 0 ? (
        <div className="space-y-2">
          {notes.map((note, index) => (
            <a
              key={index}
              href={note}
              className="flex items-center justify-between p-3 border rounded-lg  transition-colors"
            >
              <div className="flex items-center gap-3">
                <RiFileTextLine className="text-primary text-xl" />
                <span className="font-medium">Recourse {index + 1}</span>
              </div>
              <FaDownload className=" text-primary" />
            </a>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No resources available for this lecture.
        </p>
      )}
    </div>
  );
}
