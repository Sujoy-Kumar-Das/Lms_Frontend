"use client";
import ModuleContext from "@/context/ModuleContsxt";
import { useContext } from "react";

export default function useModuleContext() {
  const context = useContext(ModuleContext);

  if (!context) {
    throw new Error(
      "Trying to access module context value outside of provider."
    );
  }

  return context;
}
