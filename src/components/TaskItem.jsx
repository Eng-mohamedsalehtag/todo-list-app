import { Link } from "react-router-dom";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center gap-3 p-3 rounded-xl border transition-all
      ${task.completed ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200 shadow-sm"}`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
          ${task.completed ? "bg-purple-600 border-purple-600 text-white" : "border-gray-300 hover:border-purple-400"}`}
      >
        {task.completed && <i className="fa-solid fa-check text-xs"></i>}
      </button>

      <Link to={`/tasks/${task.id}`} className="flex-1">
        <span
          className={`text-sm ${task.completed ? "line-through text-gray-400" : "text-gray-700"}`}
        >
          {task.text}
        </span>
      </Link>

      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-300 hover:text-red-400 transition-colors"
      >
        <i className="fa-solid fa-trash-can text-sm"></i>
      </button>
    </li>
  );
}
