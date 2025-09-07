import { twMerge } from "tailwind-merge";

export default function CommonHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={twMerge("text-center mb-16 max-w-3xl mx-auto", className)}>
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      <p className="mt-4 text-lg text-text-secondary ">{subtitle}</p>
    </div>
  );
}
