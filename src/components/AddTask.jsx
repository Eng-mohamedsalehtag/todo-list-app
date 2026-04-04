import { useState } from "react";

export default function AddTaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a task..."
        className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
      />
      <button
        onClick={handleAdd}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm transition-colors"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
