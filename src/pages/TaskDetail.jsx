import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetail({ tasks, onToggle, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <i className="fa-solid fa-circle-exclamation text-5xl text-gray-300 mb-4"></i>
        <p className="text-gray-500 mb-4"> This task does not exist </p>
        <button
          onClick={() => navigate("/tasks")}
          className="text-purple-600 font-semibold"
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 mb-6 flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors"
      >
        <i className="fa-solid fa-arrow-right"></i>
        <span className="text-sm">Back</span>
      </button>

      {/* Task Card */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              task.completed ? "bg-green-100" : "bg-purple-100"
            }`}
          >
            <i
              className={`text-xl ${
                task.completed
                  ? "fa-solid fa-check text-green-500"
                  : "fa-regular fa-clock text-purple-500"
              }`}
            ></i>
          </div>
          <div>
            <p
              className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
            >
              {task.text}
            </p>
            <span
              className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                task.completed
                  ? "bg-green-100 text-green-600"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {task.completed ? "Completed" : "Active"}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 text-sm text-gray-400 mb-6">
          <i className="fa-regular fa-calendar mr-2"></i>
          ID: {task.id}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              onToggle(task.id);
              navigate("/tasks");
            }}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            <i
              className={`mr-2 ${task.completed ? "fa-solid fa-rotate-left" : "fa-solid fa-check"}`}
            ></i>
            {task.completed ? "Undo Completion" : "Mark as Complete"}
          </button>
          <button
            onClick={() => {
              onDelete(task.id);
              navigate("/tasks");
            }}
            className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            <i className="fa-solid fa-trash-can mr-2"></i>
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
