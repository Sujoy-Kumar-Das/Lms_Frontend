import CommonContainer from "@/_components/shared/container/CommonContainer";
import CourseList from "@/_components/shared/container/CourseList";
import CommonHeader from "@/_components/shared/header/CommonHeader";

export default function PopularCourse() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Popular Courses"
        subtitle="Explore our most popular courses and start your learning journey
          today."
      />

      <CourseList />

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center text-primary hover:text-secondary font-medium"
        >
          View All Courses
          <i className="fas fa-arrow-right ml-2" />
        </a>
      </div>
    </CommonContainer>
  );
}
