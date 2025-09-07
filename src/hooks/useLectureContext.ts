"use client";
import LectureContext from "@/context/LectureContext";
import { useContext } from "react";

export default function useLectureContext() {
  const context = useContext(LectureContext);

  if (!context) {
    throw new Error(
      "You are try to access lecture context outside of provider."
    );
  }

  return context;
}
