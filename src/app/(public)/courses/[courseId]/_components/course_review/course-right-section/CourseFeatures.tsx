import {
  FaCertificate,
  FaDownload,
  FaFileAlt,
  FaInfinity,
  FaMobileAlt,
  FaVideo,
} from "react-icons/fa";

const features = [
  {
    id: crypto.randomUUID(),
    title: "42 hours on-demand video",
    icon: <FaVideo className="w-5 h-5 text-primary mr-3" />,
  },
  {
    id: crypto.randomUUID(),
    title: "85 articles",
    icon: <FaFileAlt className="w-5 h-5 text-primary mr-3" />,
  },
  {
    id: crypto.randomUUID(),
    title: "56 downloadable resources",
    icon: <FaDownload className="w-5 h-5 text-primary mr-3" />,
  },
  {
    id: crypto.randomUUID(),
    title: "Full lifetime access",
    icon: <FaInfinity className="w-5 h-5 text-primary mr-3" />,
  },
  {
    id: crypto.randomUUID(),
    title: "Access on mobile and TV",
    icon: <FaMobileAlt className="w-5 h-5 text-primary mr-3" />,
  },
  {
    id: crypto.randomUUID(),
    title: "Certificate of completion",
    icon: <FaCertificate className="w-5 h-5 text-primary mr-3" />,
  },
];

export default function CourseFeatures() {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-text-primary mb-3">
        This course includes:
      </h3>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature.id} className="flex items-center">
            {feature.icon}
            <span className=" text-text-secondary">{feature.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
