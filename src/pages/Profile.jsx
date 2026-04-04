export default function Profile() {
  const stats = [
    {
      icon: "fa-solid fa-fire",
      label: "days in a row",
      value: "7",
      color: "text-orange-500",
    },
    {
      icon: "fa-solid fa-trophy",
      label: "completed tasks",
      value: "24",
      color: "text-yellow-500",
    },
    {
      icon: "fa-solid fa-star",
      label: "points",
      value: "120",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Avatar */}
      <div className="flex flex-col items-center mt-8 mb-8">
        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-3">
          <i className="fa-solid fa-user text-4xl text-purple-400"></i>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Mohamed Saleh</h2>
        <p className="text-gray-400 text-sm">MERN Stack Developer</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-4 text-center">
            <i className={`${s.icon} text-2xl ${s.color} mb-2 block`}></i>
            <p className="text-xl font-bold text-gray-800">{s.value}</p>
            <p className="text-xs text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-white rounded-2xl shadow divide-y divide-gray-100">
        {[
          {
            icon: "fa-solid fa-code",
            label: "Specialization",
            value: "MERN Stack",
          },
          {
            icon: "fa-solid fa-graduation-cap",
            label: "Degree",
            value: "Electronics Engineering",
          },
          {
            icon: "fa-solid fa-location-dot",
            label: "City",
            value: "Rosetta, Egypt",
          },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <i className={`${row.icon} text-purple-400 w-5 text-center`}></i>
            <span className="text-sm text-gray-500 flex-1">{row.label}</span>
            <span className="text-sm font-medium text-gray-700">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
