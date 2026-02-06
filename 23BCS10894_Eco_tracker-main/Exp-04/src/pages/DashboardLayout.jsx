import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-5 mb-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h3>
        <p className="text-gray-500">
          Monitor your eco impact
        </p>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow rounded-xl p-3 mb-6">
        <nav className="flex gap-3 flex-col sm:flex-row">
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

      {/* Content */}
      <div className="bg-white shadow rounded-xl p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
