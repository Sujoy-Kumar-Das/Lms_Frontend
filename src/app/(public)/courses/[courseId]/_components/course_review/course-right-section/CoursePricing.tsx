interface CoursePricingProps {
  originalPrice: number;
  discountPrice: number;
  percentage: number;
}

export default function CoursePricing({
  originalPrice,
  discountPrice,
  percentage,
}: CoursePricingProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-text-primary">
          ${originalPrice}
        </span>
        <span className="text-lg line-through text-text-secondary">
          ${discountPrice}
        </span>
      </div>
      <p className="text-secondary font-medium mt-1">
        {percentage}% discount ends today
      </p>
    </div>
  );
}
