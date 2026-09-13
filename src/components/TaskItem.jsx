import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleSave() {
    const trimmedText = editText.trim();

    if (trimmedText === "") {
      return;
    }

    onEdit(task.id, trimmedText);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(task.text);
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSave();
    }

    if (event.key === "Escape") {
      handleCancel();
    }
  }

  return (
    <li
      className={`p-4 rounded-xl border transition ${
        task.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      {isEditing ? (
        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 px-3 py-2 border border-blue-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>

        </div>
      ) : (
        <div className="flex items-center gap-4">

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 accent-blue-600 cursor-pointer"
            aria-label={`Mark ${task.text} as complete`}
          />

          <span
            className={`flex-1 break-words ${
              task.completed
                ? "line-through text-gray-400"
                : "text-gray-800 font-medium"
            }`}
          >
            {task.text}
          </span>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-3 py-2 text-sm text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => onDelete(task.id)}
              className="px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition"
            >
              Delete
            </button>

          </div>

        </div>
      )}
    </li>
  );
}

export default TaskItem;