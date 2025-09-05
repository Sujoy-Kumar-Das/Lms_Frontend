/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEnrollMutation } from "@/lib/redux/api/course/course.api";
import { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function EnrollButton({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const [enroll, { isLoading }] = useEnrollMutation();

  const handleEnrollCourse = async () => {
    try {
      const res = await enroll(id).unwrap();

      if (res._id) {
        toast.success("Course enrolled successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <button
      onClick={handleEnrollCourse}
      disabled={isLoading}
      className={twMerge(
        `
        flex items-center justify-center
        btn btn-primary
        ${isLoading && " cursor-not-allowed"}
        disabled:opacity-75 disabled:cursor-not-allowed
        min-w-[120px]
      `,
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin h-5 w-5 mr-2" />
          <span>Enrolling...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
