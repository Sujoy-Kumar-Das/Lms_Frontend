import CTASection from "./_components/ctaSection/CTASection";
import FeaturesSection from "./_components/featuresSection/FeaturersSection";
import HeroSection from "./_components/HeroSection";
import PopularCourse from "./_components/populerCourse/PopularCourse";
import TestimonialSection from "./_components/testimonialSection/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularCourse />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
