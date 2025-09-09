import { FaPlay } from "react-icons/fa";

export default function NoLectureFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-background p-4 rounded-full mb-4">
        <FaPlay className="text-primary text-3xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Select a lecture to begin</h3>
      <p className="text-secondary max-w-md">
        Choose a lecture from the sidebar to start watching video content and
        access learning materials.
      </p>
    </div>
  );
}
