const getNewAccessToken = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
};

export default getNewAccessToken;
