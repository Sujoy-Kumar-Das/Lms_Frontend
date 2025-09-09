/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseInstructorInformation from "./CoureInstractorInformation";
import CourseContent from "./CourseContent";
import CourseDescription from "./CourseDescription";
import CourseHeader from "./CourseHeader";
import CourseReview from "./CourseReview";
import CourseTopics from "./CourseTopics";

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBwRez42QTfH_Zyj46M1RkK4U57VVYSZlpQ&s";

export default function CourseLeftSection({
  courseDetails,
}: {
  courseDetails: any;
}) {
  return (
    <div className="lg:w-2/3">
      {/* course header  */}
      <CourseHeader courseDetails={courseDetails} />

      {/* Course Description */}
      <CourseDescription description={courseDetails.description} />

      {/* course topics dummy component*/}
      <CourseTopics />

      {/* Course Content Section */}
      <CourseContent modules={courseDetails?.modules} />

      {/* dummy course instructor information section  */}
      <CourseInstructorInformation
        name="Alex Morgan"
        role="Senior Web Developer at TechCorp"
        image={image}
        rating={4.9}
        reviews={12548}
        students={84295}
        bio="Alex Morgan is a seasoned front-end developer with over 10 years of experience in building modern web applications. He has worked with numerous tech companies and startups, helping them create engaging user experiences. Alex is passionate about teaching and has helped thousands of students kickstart their careers in web development."
      />

      {/* course reviews dummy component */}
      <CourseReview />
    </div>
  );
}
