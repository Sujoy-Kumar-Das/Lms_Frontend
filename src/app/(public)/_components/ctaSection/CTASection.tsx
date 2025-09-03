import CommonContainer from "@/_components/shared/container/CommonContainer";

export default function CTASection() {
  return (
    <CommonContainer className=" bg-primary">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-white">
            Ready to start your learning journey?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join thousands of students learning with EduLearn today.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:text-right">
          <a
            href="#"
            className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300"
          >
            Create Free Account
          </a>
          <a
            href="#courses"
            className="ml-4 text-white hover:text-blue-200 font-medium inline-flex items-center"
          >
            Browse Courses
            <i className="fas fa-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </CommonContainer>
  );
}
