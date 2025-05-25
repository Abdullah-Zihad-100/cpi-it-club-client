import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { axiosSecure } from "../../Apis/axios";
import Loader from "../../Components/Loader";

const Statistics = () => {
  const [stats, setStats] = useState({
    users: 0,
    members: 0,
    courses: 0,
    events: 0,
  });
  console.log(stats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/admin-stats").then((data) => {
      setStats(data?.data);
      setLoading(false);
    });
  }, []);

  const data = [
    { name: "Users", value: stats.users },
    { name: "Members", value: stats.members },
    { name: "Courses", value: stats.courses },
    { name: "Events", value: stats.events },
    { name: "Class", value: stats.classes },
  ];

  if (loading) return <Loader />;

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800">
        📊 IT Club Statistics
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Total Users"
          value={stats?.users}
          color="from-blue-400 to-blue-600"
        />
        <StatCard
          title="Total Members"
          value={stats?.members}
          color="from-green-400 to-green-600"
        />
        <StatCard
          title="Total Courses"
          value={stats?.courses}
          color="from-purple-400 to-purple-600"
        />
        <StatCard
          title="Total Events"
          value={stats?.events}
          color="from-orange-400 to-orange-600"
        />
        <StatCard
          title="Total Classes"
          value={stats?.classes}
          color="from-pink-400 to-pink-600"
        />
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
          Visual Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div
    className={`bg-gradient-to-r ${color} text-white rounded-xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-300`}
  >
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default Statistics;
