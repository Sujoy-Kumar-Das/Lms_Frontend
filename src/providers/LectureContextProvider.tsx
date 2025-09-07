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
    if (!lectures.length) {
      setLectures([data]);
      return { message: "Lecture added successfully" };
    }

    const isExitsTitle = lectures.find(
      (lecture) => lecture?.title?.toLowerCase() === data?.title?.toLowerCase()
    );

    if (isExitsTitle) {
      throw new Error(
        "A lecture already exists in your module with this title"
      );
    }

    setLectures((prev) => [...prev, data]);
    return { message: "Lecture added successfully" };
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
