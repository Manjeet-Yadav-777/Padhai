export default function Dashboard() {
  const stats = [
    { title: "Total Students", value: 320, color: "from-blue-500 to-blue-700" },
    {
      title: "Total Teachers",
      value: 25,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Total Classes",
      value: 15,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Fees Collected",
      value: "₹1.2L",
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <div className="p-6  min-h-screen text-gray-200">
      <h1 className="text-3xl font-semibold mb-8 bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
        📊 Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <div
            key={item.title}
            className={`bg-linear-to-r ${item.color} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300`}
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="text-4xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">
          🕒 Recent Activities
        </h2>
        <ul className="space-y-2 text-gray-400">
          <li>
            ✅ New student <b className="text-gray-200">Rohit Sharma</b> added
            to Class 10A
          </li>
          <li>
            📚 Teacher <b className="text-gray-200">Mrs. Gupta</b> uploaded Math
            assignments
          </li>
          <li>
            💰 Fees received from <b className="text-gray-200">Neha Patel</b>
          </li>
          <li>🏫 Class 8B attendance marked</li>
        </ul>
      </div>
    </div>
  );
}
