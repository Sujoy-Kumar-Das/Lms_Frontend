import {
  FaCertificate,
  FaChartLine,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    id: crypto.randomUUID(),
    icon: <FaGraduationCap className="text-primary" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with real-world experience.",
  },
  {
    id: crypto.randomUUID(),
    icon: <FaChartLine className="text-primary" />,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics and reports.",
  },
  {
    id: crypto.randomUUID(),
    icon: <FaCertificate className="text-primary" />,
    title: "Certifications",
    description:
      "Earn recognized certificates upon completion of your courses.",
  },
  {
    id: crypto.randomUUID(),
    icon: <FaUsers className="text-primary" />,
    title: "Interactive Learning",
    description:
      "Engage with peers and instructors through discussions and group projects.",
  },
];

export default function FeaturesList() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </div>
  );
}
