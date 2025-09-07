"use client";

import SelectInput from "@/_components/form/SelectInput";
import useGetCourseOptions from "@/hooks/useGetCourseOptions";

export default function SelectCourse() {
  const courseOptions = useGetCourseOptions();

  return (
    <SelectInput
      name="course"
      options={courseOptions}
      label="Select a course"
      placeholder="Select a course"
    />
  );
}
