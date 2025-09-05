import DashboardHeader from "@/_components/shared/header/DashboardHeader";
import UserEnrolledCoursesList from "./_components/UserEnrolledCoursesList";

export default function MyCoursesPage() {
  return (
    <div>
      <DashboardHeader
        title="My Learning Dashboard"
        subtitle="Continue your journey to knowledge"
      />

      <UserEnrolledCoursesList />
    </div>
  );
}
