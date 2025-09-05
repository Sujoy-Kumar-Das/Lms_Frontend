import EnrollButton from "@/_components/enroll-button/EnrollButton";
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
    <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 card-hover">
      <Link href={`/courses/${course._id}`}>
        <Image
          src={course.thumbnail}
          alt={course.title}
          height={400}
          width={400}
          className="w-full h-48 object-cover"
        />
        <div className={"p-6"}>
          <h3 className="text-xl font-semibold text-text-primary mt-2">
            {course.title}
          </h3>
          <p className="mt-2 text-text-secondary">
            {course.shortDescription || ""}
          </p>
        </div>
      </Link>

      <div className="mt-4 flex items-center justify-between p-6">
        <span className="text-lg font-bold text-text-primary">
          ${course.price}
        </span>
        <EnrollButton id={course._id}>Enroll Now</EnrollButton>
      </div>
    </div>
  );
}
