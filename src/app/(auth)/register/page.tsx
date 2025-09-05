/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAuth } from "@/hooks/useAuth";
import useRedirect from "@/hooks/useRedirect";
import { useRegisterMutation } from "@/lib/redux/api/auth/auth.api";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import AuthComponent from "../_components/AuthComponents";

export default function RegistrationPage() {
  const [registerStudent, { isLoading }] = useRegisterMutation();

  const redirect = useRedirect();
  const { loginUser } = useAuth();

  const handleCreateUser = async (data: FieldValues) => {
    try {
      const res = await registerStudent(data).unwrap();

      if (res._id) {
        toast.success("Account created successfully");
        await loginUser();
        redirect();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AuthComponent
      onSubmit={handleCreateUser}
      type="register"
      loading={isLoading}
    />
  );
}
