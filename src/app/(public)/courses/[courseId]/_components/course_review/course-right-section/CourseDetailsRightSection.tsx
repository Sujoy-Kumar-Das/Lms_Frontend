/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import CourseFeatures from "./CourseFeatures";
import CoursePricing from "./CoursePricing";

export default function CourseDetailsRightSection({
  courseDetails,
}: {
  courseDetails: any;
}) {
  return (
    <div className="lg:w-1/3">
      <div className="bg-background rounded-xl shadow-lg p-6 sticky top-28">
        <Image
          height={900}
          width={900}
          src={courseDetails.thumbnail}
          alt={courseDetails.title}
          className="w-full h-48 object-cover rounded-xl"
        />

        {/* course pricing section  with discount dummy information*/}
        <CoursePricing
          originalPrice={courseDetails?.price}
          discountPrice={courseDetails?.discount?.price || 0}
          percentage={courseDetails?.discount?.percentage || 0}
        />

        {/* course action buttons */}
        <div className="mt-6 space-y-4">
          <button className="w-full btn btn-primary">Enroll Now</button>
          <button className="w-full btn btn-outline">Add to Cart</button>
        </div>

        {/* course features dummy component  */}
        <CourseFeatures />

        <div className="mt-6">
          <p className="text-text-secondary text-sm">
            30-Day Money-Back Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
