import { FaCheck } from "react-icons/fa";

const topics = [
  {
    id: crypto.randomUUID(),
    title: "Build responsive websites with HTML, CSS, and JavaScript",
  },
  {
    id: crypto.randomUUID(),
    title: "Create modern web applications with React.js",
  },
  {
    id: crypto.randomUUID(),
    title: "Implement API integration and authentication",
  },
  {
    id: crypto.randomUUID(),
    title: "Deploy applications to production environments",
  },
  {
    id: crypto.randomUUID(),
    title: "Master CSS Grid, Flexbox, and responsive design",
  },
  {
    id: crypto.randomUUID(),
    title: "Build a professional portfolio of real-world projects",
  },
];

export default function CourseTopics() {
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        What you&apos;ll learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <div key={topic.id} className="flex items-start">
            <FaCheck className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
            <span className="text-text-secondary">{topic.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
