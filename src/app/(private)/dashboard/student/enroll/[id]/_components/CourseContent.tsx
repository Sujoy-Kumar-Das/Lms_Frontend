"use client";

import useModuleContext from "@/hooks/useModuleContext";
import LectureNotes from "./LectureNotes";
import LectureVideo from "./LectureVideo";
import NoLectureFound from "./NoLectureFound";
import VideoDescription from "./VideoDesctiption";

export default function CourseContent() {
  const { selectedLecture } = useModuleContext();

  return (
    <div className="bg-background rounded-xl shadow-sm border p-6">
      {selectedLecture ? (
        <>
          <LectureVideo video={selectedLecture.video} />
          <VideoDescription title={selectedLecture.title} />
          <LectureNotes notes={selectedLecture.notes} />
        </>
      ) : (
        <NoLectureFound />
      )}
    </div>
  );
}
