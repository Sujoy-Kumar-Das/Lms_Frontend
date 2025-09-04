/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function CourseNavigator({
  courseTitle,
}: {
  courseTitle: string;
}) {
  return (
    <nav className="text-sm text-text-secondary mb-6">
      <ol className="list-none p-0 inline-flex items-center">
        <li className="flex items-center">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <FaChevronRight className="mx-3 w-3 h-3 text-primary" />
        </li>
        <li className="flex items-center">
          <Link href="/courses" className="text-primary hover:underline">
            Courses
          </Link>
          <FaChevronRight className="mx-3 w-3 h-3 text-primary" />
        </li>
        <li className="flex items-center">
          <span className="text-text-secondary">{courseTitle}</span>
        </li>
      </ol>
    </nav>
  );
}
