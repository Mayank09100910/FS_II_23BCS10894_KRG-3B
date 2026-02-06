import React from "react";

const Log = ({ id, activity, carbon }) => {
  const badgeColor =
    carbon <= 3
      ? "bg-green-100 text-green-700"
      : carbon <= 6
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <li className="flex justify-between items-center bg-white rounded-lg px-4 py-2 border shadow-sm hover:scale-[1.01] transition">
      <span className="text-xs text-gray-400">#{id}</span>
      <span className="flex-1 text-gray-700">{activity}</span>
      <span className={`px-3 py-1 rounded-full text-sm ${badgeColor}`}>
        {carbon}
      </span>
    </li>
  );
};

export default React.memo(Log);
