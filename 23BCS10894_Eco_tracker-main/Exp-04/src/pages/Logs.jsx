import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logSlice";
import Log from "./Log";

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center text-gray-500 mt-10">Loading logs...</p>;
  }

  if (status === "failed") {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Daily Logs</h3>

        <button
          onClick={handleRefresh}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Reload
        </button>
      </div>

      <ul className="space-y-2">
        {data.map((log) => (
          <Log key={log.id} {...log} />
        ))}
      </ul>
    </div>
  );
};

export default Logs;
