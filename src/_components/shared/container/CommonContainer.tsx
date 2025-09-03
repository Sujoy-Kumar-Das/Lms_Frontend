import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function CommonContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge("pt-28 pb-16 md:pt-40 md:pb-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
