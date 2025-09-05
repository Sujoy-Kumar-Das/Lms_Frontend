import { Suspense } from "react";
import LoginCompo from "./_components/LoginCompo";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginCompo />
    </Suspense>
  );
}
