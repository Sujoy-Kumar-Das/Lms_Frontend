import CommonContainer from "@/_components/shared/container/CommonContainer";
import CourseList from "@/_components/shared/container/CourseList";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import Link from "next/link";

export default function PopularCourse() {
  return (
    <CommonContainer className=" bg-background">
      <CommonHeader
        title="Popular Courses"
        subtitle="Explore our most popular courses and start your learning journey
          today."
      />

      <CourseList />

      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="inline-flex items-center text-primary hover:text-secondary font-medium"
        >
          View All Courses
          <i className="fas fa-arrow-right ml-2" />
        </Link>
      </div>
    </CommonContainer>
  );
}
