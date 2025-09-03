import CommonContainer from "@/_components/shared/container/CommonContainer";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    feedback:
      "The front-end development course completely transformed my career. The instructors are amazing and the content is up-to-date with industry standards.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    feedback:
      "The data science program provided me with all the skills I needed to transition into a new career. The projects were challenging and practical.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    feedback:
      "The digital marketing course exceeded my expectations. I was able to apply the strategies I learned immediately to grow our company's online presence.",
    rating: 4.5,
  },
];

export default function TestimonialSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="What Our Students Say"
        subtitle="Hear from our students about their learning experiences."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </CommonContainer>
  );
}
