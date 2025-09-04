const stats = [
  { title: "1", value: "0%" },
  { title: "2", value: "1%" },
  { title: "3", value: "2%" },
  { title: "4", value: "7%" },
  { title: "5", value: "90%" },
];

export default function RatingStats() {
  return (
    <div className=" flex-1">
      {stats.reverse().map((stat) => (
        <div key={stat.value} className="flex items-center mt-1">
          <div className="w-10 text-right mr-2">
            <span className="text-sm text-text-secondary">
              {stat.title} star
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full flex-1">
            <div
              className="h-2 bg-yellow-400 rounded-full"
              style={{ width: stat.value }}
            />
          </div>
          <div className="w-10 text-right ml-2">
            <span className="text-sm text-text-secondary">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
