import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTask = taskText.trim();

    if (trimmedTask === "") {
      return;
    }

    onAddTask(trimmedTask);
    setTaskText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-8"
    >
      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="What do you need to do?"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;