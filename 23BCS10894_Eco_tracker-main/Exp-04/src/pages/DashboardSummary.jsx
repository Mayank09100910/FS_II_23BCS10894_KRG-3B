import { useMemo } from "react";
import { logs } from "../data/log";

const DashboardSummary = () => {

  const stats = useMemo(() => {
    const total = logs.length;
    const totalCarbon = logs.reduce((sum, l) => sum + l.carbon, 0);
    const high = logs.filter((l) => l.carbon > 4).length;
    const low = logs.filter((l) => l.carbon <= 4).length;

    return { total, totalCarbon, high, low };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Summary Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard title="Total Logs" value={stats.total} />
        <StatCard title="Low Emission" value={stats.low} color="green" />
        <StatCard title="High Emission" value={stats.high} color="red" />
        <StatCard title="Total Carbon" value={stats.totalCarbon} color="blue" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color = "gray" }) => {
  const map = {
    green: "bg-green-50 border-green-200 text-green-600",
    red: "bg-red-50 border-red-200 text-red-600",
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    gray: "bg-white text-gray-800",
  };

  return (
    <div className={`border rounded-xl p-4 shadow ${map[color]}`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardSummary;
