import { FaStar } from "react-icons/fa";

export default function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-5 h-5 ${
            i < Math.round(rating) ? "text-yellow-400" : " text-text-secondary"
          }`}
        />
      ))}
    </div>
  );
}
