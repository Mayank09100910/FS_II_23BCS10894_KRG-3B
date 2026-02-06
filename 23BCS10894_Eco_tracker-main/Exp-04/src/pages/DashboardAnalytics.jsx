const DashboardAnalytics = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Analytics Overview
        </h2>
        <p className="text-gray-500">
          Visual insight into your carbon activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-gray-600">Low Emission</p>
          <p className="text-2xl font-bold text-green-600">72%</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-gray-600">Moderate</p>
          <p className="text-2xl font-bold text-yellow-600">18%</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-gray-600">High Emission</p>
          <p className="text-2xl font-bold text-red-600">10%</p>
        </div>
      </div>

      {/* Placeholder Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-xl p-4 h-64 flex items-center justify-center text-gray-400">
          📊 Bar Chart Coming Soon
        </div>

        <div className="bg-white shadow rounded-xl p-4 h-64 flex items-center justify-center text-gray-400">
          🥧 Pie Chart Coming Soon
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
