import Navbar from "@/_components/shared/navbar/Navbar";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar isAuth />
      {children}
    </>
  );
}
