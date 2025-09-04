import Image from "next/image";
import { FaStar, FaUser, FaUserGraduate } from "react-icons/fa";

interface CourseInstructorInformationProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  bio: string;
}

export default function CourseInstructorInformation({
  name,
  role,
  image,
  rating,
  reviews,
  students,
  bio,
}: CourseInstructorInformationProps) {
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Instructor</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Instructor Image */}
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={name}
            height={400}
            width={400}
            className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary">{name}</h3>
          <p className="text-text-secondary">{role}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <span className="ml-1 text-text-secondary">
                {rating} Instructor Rating
              </span>
            </div>

            <div className="flex items-center">
              <FaUserGraduate className="w-5 h-5 text-text-secondary" />
              <span className="ml-1 text-text-secondary">
                {reviews.toLocaleString()} Reviews
              </span>
            </div>

            <div className="flex items-center">
              <FaUser className="w-5 h-5 text-text-secondary" />
              <span className="ml-1 text-text-secondary">
                {students.toLocaleString()} Students
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-4 text-text-secondary">{bio}</p>
        </div>
      </div>
    </div>
  );
}
