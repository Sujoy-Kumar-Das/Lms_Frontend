import RatingStats from "./RatingStats";
import ReviewItem from "./ReviewItem";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "This course completely transformed my understanding of front-end development. The projects were challenging but incredibly rewarding. I went from knowing nothing to building my own portfolio in just 3 months!",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment:
      "Alex is an amazing instructor! His explanations are clear, and he does a great job breaking down complex concepts. The React section alone is worth the price of the course.",
  },
];

export default function CourseReview() {
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6 gap-5">
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        Student Reviews
      </h2>
      <div className="flex items-center mb-6">
        <div className="mr-4 flex flex-col items-center">
          <span className="text-4xl font-bold text-text-primary">4.9</span>
          <span className="text-text-secondary">Course Rating</span>
          <span className="text-text-secondary"> 1,245 reviews</span>
        </div>

        <RatingStats />
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <ReviewItem key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
