import CommonContainer from "@/_components/shared/container/CommonContainer";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import { Suspense } from "react";
import CourseSearch from "./CourseSearch";

export default function CoursePageHeader() {
  return (
    <CommonContainer className="pt-28 pb-16 md:pt-40 md:pb-24 bg-background">
      <CommonHeader
        title="Explore Our Courses"
        subtitle="Discover a wide range of courses designed to help you achieve your learning goals and advance your career."
      />

      <Suspense>
        <CourseSearch />
      </Suspense>
    </CommonContainer>
  );
}
