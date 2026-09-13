import { useEffect, useState } from "react";

import Header from "./components/header";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        text: "Learn React components",
        completed: true
      },
      {
        id: 2,
        text: "Practice useState",
        completed: true
      },
      {
        id: 3,
        text: "Build Task Tracker",
        completed: false
      }
    ];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask
    ]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  function editTask(id, newText) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText
            }
          : task
      )
    );
  }

  function clearCompleted() {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (!matchesSearch) {
      return false;
    }

    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10">

      <div className="max-w-3xl mx-auto">

        <Header />

        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-5 sm:p-8">

          <TaskForm onAddTask={addTask} />

          <TaskStats tasks={tasks} />

         
          <div className="mb-5">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tasks..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <TaskFilters
            filter={filter}
            onFilterChange={setFilter}
          />

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Your Tasks
            </h2>

            <button
              type="button"
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-700 transition"
            >
              Clear completed
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />

        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Built with React & Tailwind CSS
        </p>

      </div>

    </main>
  );
}

export default App;