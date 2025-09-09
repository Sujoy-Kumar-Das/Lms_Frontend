export const logoutUserFunc = async () => {
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
};
