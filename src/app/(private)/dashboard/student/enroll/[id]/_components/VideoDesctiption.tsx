import { FaCheckCircle } from "react-icons/fa";

export default function VideoDescription({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between mb-4">
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <div className="flex items-center gap-2 text-sm text-secondary">
        <FaCheckCircle className="text-base" />
        <span>Completed</span>
      </div>
    </div>
  );
}
