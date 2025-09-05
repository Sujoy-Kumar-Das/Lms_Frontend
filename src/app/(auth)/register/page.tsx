import { Suspense } from "react";
import RegisterCompo from "./_components/RegisterCompo";

export default function RegistrationPage() {
  return (
    <Suspense>
      <RegisterCompo />
    </Suspense>
  );
}
