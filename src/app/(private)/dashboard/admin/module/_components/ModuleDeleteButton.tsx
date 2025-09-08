/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteModuleMutation } from "@/lib/redux/api/module/module.api";
import { ReactNode } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function ModuleDeleteButton({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: ReactNode;
}) {
  const [deleteModule, { isLoading }] = useDeleteModuleMutation();

  const handleDeleteModule = async () => {
    try {
      const res = await deleteModule(id).unwrap();

      if (res._id) {
        toast.success("Module Deleted successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <button
      onClick={handleDeleteModule}
      type="button"
      className={twMerge("btn btn-danger", className)}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center text-contrast">
          <FaSpinner className=" animate-spin mr-2" /> Deleting...
        </span>
      ) : children ? (
        children
      ) : (
        <FaTrash />
      )}
    </button>
  );
}
