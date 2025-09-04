// import RatingStars from "./RatingStars";

import RatingStars from "@/_components/shared/rating/Rating";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

interface ReviewItemProps {
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
}

export default function ReviewItem({
  name,
  avatar,
  rating,
  comment,
}: ReviewItemProps) {
  return (
    <div className="border-t border-text-secondary pt-6">
      <div className="flex items-center">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            height={400}
            width={400}
            className="w-10 h-10 rounded-full mr-3"
          />
        ) : (
          <FaUser className="w-10 h-10 rounded-full bg-text-contrast text-text-secondary mr-3" />
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          <RatingStars rating={rating} />
        </div>
      </div>
      <p className="mt-2 text-text-secondary">{comment}</p>
    </div>
  );
}
