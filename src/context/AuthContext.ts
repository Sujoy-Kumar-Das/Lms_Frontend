import { IUser } from "@/interface/user.interface";
import { createContext } from "react";

interface IAuthContext {
  user: IUser | null;
  loginUser: () => void;
  logoutUser: (redirectPath: string) => void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
