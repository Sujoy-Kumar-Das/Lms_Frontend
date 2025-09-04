import { FaChevronDown } from "react-icons/fa";

export default function CourseContent() {
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        Course Content
      </h2>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-text-secondary">
          12 sections • 85 lectures • 42h total length
        </span>
        <button className="text-primary font-medium hover:underline">
          Expand all sections
        </button>
      </div>

      {/* Course Modules */}
      <div className="space-y-3">
        {/* Single Module */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-text-primary">
                Introduction to Front-End Development
              </h3>
              <p className="text-sm text-text-secondary">
                5 lectures • 2hr 10min
              </p>
            </div>
            <FaChevronDown className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-text-primary">
                HTML5 Fundamentals
              </h3>
              <p className="text-sm text-text-secondary">
                8 lectures • 3hr 45min
              </p>
            </div>
            <FaChevronDown className="w-5 h-5 text-secondary" />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-text-primary">
                CSS3 and Modern Layouts
              </h3>
              <p className="text-sm text-text-secondary">
                10 lectures • 5hr 20min
              </p>
            </div>
            <FaChevronDown className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
