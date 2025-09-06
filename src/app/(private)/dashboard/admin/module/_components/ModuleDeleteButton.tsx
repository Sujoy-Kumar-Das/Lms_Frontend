/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteModuleMutation } from "@/lib/redux/api/module/module.api";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ModuleDeleteButton({ id }: { id: string }) {
  const [deleteModule, {}] = useDeleteModuleMutation();

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
      className="text-red-500 hover:text-red-700"
    >
      <FiTrash2 size={18} />
    </button>
  );
}
