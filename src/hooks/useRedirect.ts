"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useRedirect({
  pathName = "redirect",
}: { pathName?: string } = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get(pathName) || "/";

  const redirect = () => {
    router.push(redirectPath);
  };

  return redirect;
}
