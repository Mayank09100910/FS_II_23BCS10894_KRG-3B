import { logs } from "../data/log";
import Log from "./Log";

const Dashboard2 = () => {
  const totalCarbon = logs.reduce((total, log) => total + log.carbon, 0);
  const highEA = logs.filter((log) => log.carbon > 4);
  const lowEA = logs.filter((log) => log.carbon <= 4);

  return (
    <section className="space-y-6">

      {/* Total Card */}
      <div className="bg-white shadow-md rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">
          Total Carbon Emission
        </h2>
        <p className="text-3xl font-bold text-green-600">
          {totalCarbon}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* All Logs */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            All Activities
          </h3>
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {logs.map((log) => (
              <Log
                key={log.id}
                id={log.id}
                activity={log.activity}
                carbon={log.carbon}
              />
            ))}
          </ul>
        </div>

        {/* High Carbon */}
        <div className="bg-red-50 border border-red-200 shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3 text-red-700">
            High Carbon Activities
          </h3>
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {highEA.map((log) => (
              <Log
                key={log.id}
                id={log.id}
                activity={log.activity}
                carbon={log.carbon}
              />
            ))}
          </ul>
        </div>

        {/* Low Carbon */}
        <div className="bg-green-50 border border-green-200 shadow rounded-xl p-4 md:col-span-2">
          <h3 className="text-lg font-semibold mb-3 text-green-700">
            Low Carbon Activities
          </h3>
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {lowEA.map((log) => (
              <Log
                key={log.id}
                id={log.id}
                activity={log.activity}
                carbon={log.carbon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard2;
