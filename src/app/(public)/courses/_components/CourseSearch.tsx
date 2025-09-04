"use client";

import useSearch from "@/hooks/useSearch";
import { FaSearch } from "react-icons/fa";

export default function CourseSearch() {
  const { search } = useSearch();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("searchTerm") as string;

    search({ searchTerm });
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search courses..."
            name="searchTerm"
            className="w-full py-3 px-4 border border-text-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <FaSearch className="absolute right-3 top-3.5 text-text-secondary" />
        </div>

        <button
          type="submit"
          className="bg-primary text-text-contrast px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}
