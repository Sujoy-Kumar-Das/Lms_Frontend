"use client";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./AuthContextProvider";
import ReduxProvider from "./ReduxProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <ToastContainer position="top-center" style={{ zIndex: 10000 }} />
        {children}
      </AuthContextProvider>
    </ReduxProvider>
  );
}
