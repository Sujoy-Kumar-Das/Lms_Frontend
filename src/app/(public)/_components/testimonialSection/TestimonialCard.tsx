import Image from "next/image";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  feedback,
  rating,
}: Testimonial) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="bg-light rounded-xl p-6 shadow-md card-hover">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-text-primary">{name}</h4>
            <p className="text-text-secondary">{role}</p>
          </div>
        </div>
        <div className="ml-auto text-primary">
          <FaQuoteRight className="text-2xl opacity-25" />
        </div>
      </div>

      <p className="mt-4 text-text-secondary">&ldquo;{feedback}&quot;</p>

      <div className="mt-4 flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
      </div>
    </div>
  );
}
