"use client";
import { useState } from "react";
import { FaPlayCircle, FaBook, FaSearch, FaFileAlt } from "react-icons/fa";

interface Lecture {
  _id: string;
  title: string;
  duration: string;
  notes?: string;
}

interface Module {
  _id: string;
  title: string;
  lectures: Lecture[];
}

interface Course {
  _id: string;
  title: string;
  description: string;
  modules: Module[];
}

export default function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null);
  const [activeTab, setActiveTab] = useState<"video" | "notes">("video");

  // Dummy Data
  const course: Course = {
    _id: "c1",
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    modules: [
      {
        _id: "m1",
        title: "HTML & CSS Basics",
        lectures: [
          {
            _id: "l1",
            title: "Introduction to HTML",
            duration: "10:20",
            notes: "HTML notes...",
          },
          {
            _id: "l2",
            title: "CSS Fundamentals",
            duration: "15:40",
            notes: "CSS notes...",
          },
        ],
      },
      {
        _id: "m2",
        title: "JavaScript Fundamentals",
        lectures: [
          {
            _id: "l3",
            title: "Variables & Data Types",
            duration: "12:10",
            notes: "JS variables notes...",
          },
          {
            _id: "l4",
            title: "Functions & Scope",
            duration: "13:25",
            notes: "JS functions notes...",
          },
        ],
      },
    ],
  };

  // Filter lectures based on search
  const filteredModules = course.modules.map((module) => ({
    ...module,
    lectures: module.lectures.filter((lecture) =>
      lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
          <p className="text-gray-600 mt-1">{course.description}</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search lecture..."
              className="outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Modules & Lectures */}
        <div className="md:col-span-1 space-y-4 h-[calc(100vh-160px)] overflow-y-auto">
          {filteredModules.map((module) => (
            <div
              key={module._id}
              className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="px-6 py-4 bg-indigo-100 font-semibold text-gray-800 flex items-center gap-2 text-lg">
                <FaBook className="text-indigo-500" /> {module.title}
              </div>
              <div className="p-4 space-y-3">
                {module.lectures.length === 0 && (
                  <p className="text-gray-400 text-sm">No lecture found</p>
                )}
                {module.lectures.map((lecture) => (
                  <button
                    key={lecture._id}
                    onClick={() => {
                      setActiveLecture(lecture);
                      setActiveTab("video");
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 transition shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <FaPlayCircle className="text-blue-500" />
                      <span className="text-gray-700 font-medium">
                        {lecture.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {lecture.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lecture Player & Notes */}
        <div className="md:col-span-2 space-y-4">
          {activeLecture ? (
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <FaPlayCircle className="text-blue-500" />{" "}
                  {activeLecture.title}
                </h2>
                <p className="text-gray-500 mt-2 md:mt-0">
                  Duration: {activeLecture.duration}
                </p>
              </div>

              {/* Tabs */}
              <div className="mt-6 border-b border-gray-200">
                <nav className="-mb-px flex gap-6">
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`pb-2 font-medium text-sm ${
                      activeTab === "video"
                        ? "border-b-2 border-indigo-500 text-indigo-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Video
                  </button>
                  <button
                    onClick={() => setActiveTab("notes")}
                    className={`pb-2 font-medium text-sm ${
                      activeTab === "notes"
                        ? "border-b-2 border-indigo-500 text-indigo-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Notes
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "video" ? (
                  <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center text-gray-400 text-xl font-semibold">
                    Video Player Placeholder
                  </div>
                ) : (
                  <div className="bg-indigo-50 p-4 rounded-2xl text-gray-700">
                    {activeLecture.notes ||
                      "No notes available for this lecture."}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center justify-center text-gray-400 h-96 text-lg font-medium">
              Select a lecture to start learning
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
