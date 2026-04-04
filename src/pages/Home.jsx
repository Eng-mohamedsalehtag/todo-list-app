import { Link } from "react-router-dom";

export default function Home({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const active = tasks.filter((t) => !t.completed).length;
  const percent =
    tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Hello 👋</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back Mohamed Saleh{" "}
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl shadow p-5 mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-gray-700">Your Progress </span>
          <span className="text-purple-600 font-bold text-lg">{percent}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {completed} Completed out of {tasks.length} tasks
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-2xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-purple-600">{active}</p>
          <p className="text-xs text-gray-500 mt-1"> Active Tasks</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 text-center">
          <p className="text-3xl font-bold text-green-500">{completed}</p>
          <p className="text-xs text-gray-500 mt-1">Completed Tasks</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/tasks"
        className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-2xl font-semibold transition-colors"
      >
        <i className="fa-solid fa-plus mr-2"></i>
        Add New Task
      </Link>
    </div>
  );
}
