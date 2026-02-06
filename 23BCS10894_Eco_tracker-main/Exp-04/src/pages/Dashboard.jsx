import { Outlet, Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      
      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-5 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Track your eco data & performance
        </p>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow rounded-xl p-3 mb-6">
        <nav className="flex flex-col sm:flex-row gap-3">
          <Link
            to="summary"
            className={`px-4 py-2 rounded-lg text-center transition ${
              isActive("summary")
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            Summary
          </Link>

          <Link
            to="analytics"
            className={`px-4 py-2 rounded-lg text-center transition ${
              isActive("analytics")
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            Analytics
          </Link>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white shadow rounded-xl p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
