/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonContainer from "@/_components/shared/container/CommonContainer";
import {
  getAllCourse,
  getSingleCourse,
} from "@/service/actions/course.service";
import CourseLeftSection from "./_components/course_review/course-left-section/CourseLeftSection";
import CourseDetailsRightSection from "./_components/course_review/course-right-section/CourseDetailsRightSection";
import CourseNavigator from "./_components/CourseNavigator";

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  const courseDetails = await getSingleCourse(courseId);

  // todo declare type for course details and use them in course details page;
  return (
    <CommonContainer>
      <div className="py-8">
        <CourseNavigator courseTitle={courseDetails?.title} />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <CourseLeftSection courseDetails={courseDetails} />
          {/* Right Sidebar */}
          <CourseDetailsRightSection courseDetails={courseDetails} />
        </div>
      </div>
    </CommonContainer>
  );
}

export async function generateStaticParams() {
  // todo add limit for 50 courses
  const courses = await getAllCourse();

  return courses.map((course: any) => ({
    params: { courseId: course._id },
  }));
}
