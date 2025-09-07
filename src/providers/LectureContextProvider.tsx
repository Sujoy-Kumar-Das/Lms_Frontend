"use client";
import LectureContext from "@/context/LectureContext";
import useLocalStorage from "@/hooks/useLocalstorage";
import { ILectureDraftData } from "@/interface/lecture.interface";
import { ReactNode } from "react";

export default function LectureContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lectures, setLectures] = useLocalStorage<ILectureDraftData[]>(
    "draft_lectures",
    []
  );

  const handleAddLecture = async (data: ILectureDraftData) => {
    setLectures((prev) => [...prev, data]);
  };

  const handleRemoveLecture = (title: string) => {
    if (!lectures.length) {
      throw new Error("No Draft found for remove.");
    }

    const nextLecture = lectures.filter(
      (lecture) => lecture.title.toLowerCase() !== title.toLowerCase()
    );
    setLectures(nextLecture);

    return { message: "Lecture removed" };
  };

  const handleClearLecture = () => {
    setLectures([]);
  };

  return (
    <LectureContext.Provider
      value={{
        lectures,
        onAddLecture: handleAddLecture,
        onRemoveLecture: handleRemoveLecture,
        clearLecture: handleClearLecture,
      }}
    >
      {children}
    </LectureContext.Provider>
  );
}
