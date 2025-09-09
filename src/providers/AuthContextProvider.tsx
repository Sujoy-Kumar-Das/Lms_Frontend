/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthContext from "@/context/AuthContext";
import { IUser } from "@/interface/user.interface";
import { useGetMeQuery } from "@/lib/redux/api/user/user.api";
import { logoutUserFunc } from "@/utils/logoutUser";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data, refetch, isLoading } = useGetMeQuery(undefined);

  const [user, setUser] = useState<IUser | null>(null);

  const router = useRouter();

  const modifyUserData = (data: any): IUser => ({
    _id: data._id,
    name: data.name,
    image: data.photo,
    email: data.email,
    role: data.role,
    status: data.status,
  });

  useEffect(() => {
    if (data) {
      setUser(modifyUserData(data));
    } else {
      setUser(null);
    }
  }, [data]);

  const loginUser = async () => {
    const result = await refetch();
    if (result.data) {
      setUser(modifyUserData(result.data));
    }
  };

  const logoutUser = async (redirectPath = "/login") => {
    setUser(null);
    await logoutUserFunc();
    router.push(redirectPath);
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logoutUser,
        user,
        loading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
