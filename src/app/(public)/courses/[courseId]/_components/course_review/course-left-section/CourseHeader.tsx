/* eslint-disable @typescript-eslint/no-explicit-any */
import RatingStars from "@/_components/shared/rating/Rating";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaLanguage,
  FaUser,
} from "react-icons/fa";

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBwRez42QTfH_Zyj46M1RkK4U57VVYSZlpQ&s";

export default function CourseHeader({
  courseDetails,
}: {
  courseDetails: any;
}) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
        {courseDetails.title}
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        {courseDetails.shortDescription}
      </p>

      {/* Rating, Students, Duration dummy information */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <RatingStars rating={5} />
          <span className="ml-2 text-text-secondary">4.9 (1,245 reviews)</span>
        </div>

        <div className="flex items-center">
          <FaUser className="w-5 h-5 text-primary" />
          <span className="ml-2 text-text-secondary">12,548 students</span>
        </div>

        <div className="flex items-center">
          <FaClock className="w-5 h-5 text-primary" />
          <span className="ml-2 text-text-secondary">42 hours</span>
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-text-secondary">
          <Image
            src={image}
            alt={"instructor"}
            height={400}
            width={400}
            className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-text-primary">
            Created by{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              Alex Morgan
            </Link>
          </p>
          <p className="text-sm text-text-secondary">
            Senior Web Developer at TechCorp
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="flex items-center">
          <FaBookOpen className="w-5 h-5 text-primary" />
          <span className="ml-2 text-text-secondary">
            Last updated: 05/2023
          </span>
        </div>
        <div className="flex items-center">
          <FaGlobe className="w-5 h-5 text-primary" />
          <span className="ml-2 text-text-secondary">English</span>
        </div>
        <div className="flex items-center">
          <FaLanguage className="w-5 h-5 text-primary" />
          <span className="ml-2 text-text-secondary">
            English, Spanish subtitles
          </span>
        </div>
      </div>
    </div>
  );
}
