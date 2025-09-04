import Image from "next/image";
import Link from "next/link";

interface ICourse {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  shortDescription: string;
  price: number;
}

export default function CourseCard({ course }: { course: ICourse }) {
  return (
    <Link href={`/courses/${course._id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 card-hover">
        <Image
          src={course.thumbnail}
          alt={course.title}
          height={400}
          width={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-dark mt-2">
            {course.title}
          </h3>
          <p className="mt-2 text-gray-600">{course.shortDescription || ""}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-dark">${course.price}</span>
            <Link
              href="#"
              className="text-primary hover:text-secondary font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
