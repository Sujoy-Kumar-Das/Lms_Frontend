"use client";

import ModuleList from "@/_components/shared/module_compo/ModuleList";
import { useGetSingleEnrolledCourseByStudentQuery } from "@/lib/redux/api/enroll/enroll.api";
import ModuleContextProvider from "@/providers/ModuleContextProvider";
import CourseContent from "./CourseContent";

export default function EnrolledCourseCompo({ id }: { id: string }) {
  const { data } = useGetSingleEnrolledCourseByStudentQuery(id);

  return (
    <>
      {data && (
        <div className=" w-full p-6">
          <ModuleContextProvider>
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-6">
              {/* Left sidebar with modules */}
              <div className="w-full lg:w-1/3">
                <div className="bg-contrast rounded-xl shadow-sm border p-4">
                  <h3 className="font-semibold text-lg mb-4">Course Content</h3>
                  <ModuleList modules={data.modules} />
                </div>
              </div>

              {/* Right content area */}
              <div className="w-full lg:w-2/3">
                <CourseContent />
              </div>
            </div>
          </ModuleContextProvider>
        </div>
      )}
    </>
  );
}
