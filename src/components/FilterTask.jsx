export default function FilterTask({ filter, onFilterChange, tasks }) {
  const all = tasks.length;
  const active = tasks.filter((t) => !t.completed).length;
  const completed = tasks.filter((t) => t.completed).length;

  const btn = (label, value, count) => (
    <button
      onClick={() => onFilterChange(value)}
      className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors
        ${
          filter === value
            ? "bg-purple-600 text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
    >
      {label}
      <span
        className={`ml-1 text-xs px-1.5 py-0.5 rounded-full
        ${filter === value ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-600"}`}
      >
        {count}
      </span>
    </button>
  );

  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-4">
      {btn("All", "all", all)}
      {btn("Active", "active", active)}
      {btn("Completed", "completed", completed)}
    </div>
  );
}
