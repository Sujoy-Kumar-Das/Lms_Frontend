import CommonContainer from "@/_components/shared/container/CommonContainer";
import CourseList from "@/_components/shared/container/CourseList";
import Pagination from "@/_components/shared/pagination/Pagination";
import CoursePageHeader from "./_components/CoursePageHeader";

export default function CoursesPage() {
  return (
    <div>
      <CoursePageHeader />

      <CommonContainer className="pt-28 pb-16 md:pt-20 md:pb-24 bg-text-contrast">
        <div className="md:flex md:justify-between md:items-center">
          <h2 className="text-2xl font-bold text-dark">All Courses</h2>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <CourseList />

        <Pagination />
      </CommonContainer>
    </div>
  );
}
