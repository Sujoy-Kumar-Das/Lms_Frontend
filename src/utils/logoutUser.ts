import { redirect } from "next/navigation";

export const logoutUserFunc = async (redirectPath: string = "/") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!res.ok) {
    return;
  }

  redirect(redirectPath);
};
