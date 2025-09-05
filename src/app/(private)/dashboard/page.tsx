export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button
              className="text-dark mr-4 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="fas fa-bars" />
            </button>
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <i className="fas fa-bell text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-danger text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-gray-700">Admin User</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-primary/10">
                <i className="fas fa-book text-primary text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{courses.length}</h3>
                <p className="text-gray-500">Total Courses</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-secondary/10">
                <i className="fas fa-cubes text-secondary text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{modules.length}</h3>
                <p className="text-gray-500">Total Modules</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-warning/10">
                <i className="fas fa-chalkboard-teacher text-warning text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{lecturers.length}</h3>
                <p className="text-gray-500">Lecturers</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-danger/10">
                <i className="fas fa-users text-danger text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{users.length}</h3>
                <p className="text-gray-500">Students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              <button
                className={`tab-link py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "courses"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-dark hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("courses")}
              >
                Courses
              </button>
              <button
                className={`tab-link py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "modules"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-dark hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("modules")}
              >
                Modules
              </button>
              <button
                className={`tab-link py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "lecturers"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-dark hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("lecturers")}
              >
                Lecturers
              </button>
              <button
                className={`tab-link py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "users"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-dark hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("users")}
              >
                Users
              </button>
            </nav>
          </div>
          <div className="p-6">
            {/* Courses Tab */}
            {activeTab === "courses" && (
              <div className="tab-content">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Course Management</h2>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                    onClick={() => openModal("course")}
                  >
                    <i className="fas fa-plus mr-2" /> Add New Course
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Instructor
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Modules
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Students
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.map((course) => (
                        <tr key={course.id}>{/* Render course data here */}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Modules Tab */}
            {activeTab === "modules" && (
              <div className="tab-content">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Module Management</h2>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                    onClick={() => openModal("module")}
                  >
                    <i className="fas fa-plus mr-2" /> Add New Module
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Module
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lessons
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {modules.map((module) => (
                        <tr key={module.id}>{/* Render module data here */}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Lecturers Tab */}
            {activeTab === "lecturers" && (
              <div className="tab-content">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Lecturer Management</h2>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                    onClick={() => openModal("lecturer")}
                  >
                    <i className="fas fa-plus mr-2" /> Add New Lecturer
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lecturer
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Courses
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {lecturers.map((lecturer) => (
                        <tr key={lecturer.id}>
                          {/* Render lecturer data here */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div className="tab-content">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">User Management</h2>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                    onClick={() => openModal("user")}
                  >
                    <i className="fas fa-plus mr-2" /> Add New User
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Joined
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id}>{/* Render user data here */}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Enrollments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Enrollments</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Sofia Williams
                  </div>
                  <div className="text-sm text-gray-500">
                    Enrolled in Front-End Development
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-500">2h ago</div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Ryan Thompson
                  </div>
                  <div className="text-sm text-gray-500">
                    Enrolled in Data Science Fundamentals
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-500">5h ago</div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Emma Davis
                  </div>
                  <div className="text-sm text-gray-500">
                    Enrolled in Digital Marketing
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-500">1d ago</div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">System Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-green-100">
                    <i className="fas fa-server text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Web Server
                    </div>
                    <div className="text-sm text-gray-500">
                      Running smoothly
                    </div>
                  </div>
                </div>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-green-100">
                    <i className="fas fa-database text-green-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Database
                    </div>
                    <div className="text-sm text-gray-500">
                      Response time 42ms
                    </div>
                  </div>
                </div>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-yellow-100">
                    <i className="fas fa-tasks text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Backup System
                    </div>
                    <div className="text-sm text-gray-500">
                      Pending weekly backup
                    </div>
                  </div>
                </div>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
