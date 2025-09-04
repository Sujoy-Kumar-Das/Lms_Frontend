export default function Pagination() {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          Previous
        </a>
        <a href="#" className="px-3 py-1 rounded-lg bg-primary text-white">
          1
        </a>
        <a
          href="#"
          className="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          2
        </a>
        <a
          href="#"
          className="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          3
        </a>
        <span className="px-2 py-1 text-gray-600">...</span>
        <a
          href="#"
          className="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          10
        </a>
        <a
          href="#"
          className="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          Next
        </a>
      </nav>
    </div>
  );
}
