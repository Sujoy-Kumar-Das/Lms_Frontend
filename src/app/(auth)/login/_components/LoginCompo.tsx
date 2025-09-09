/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@/hooks/useAuth";
import useRedirect from "@/hooks/useRedirect";
import { useLoginMutation } from "@/lib/redux/api/auth/auth.api";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import AuthComponent from "../../_components/AuthComponents";

export default function LoginCompo() {
  const [login, { isLoading }] = useLoginMutation();

  const redirect = useRedirect();
  const { loginUser } = useAuth();

  const handleLoginUser = async (data: FieldValues) => {
    try {
      const res = await login(data).unwrap();

      if (res.email) {
        toast.success("User logged in successfully");
        await loginUser();
        redirect();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <AuthComponent
      onSubmit={handleLoginUser}
      type="login"
      loading={isLoading}
    />
  );
}
