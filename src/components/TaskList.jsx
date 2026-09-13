import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-4xl mb-3">
          📋
        </div>

        <p className="text-gray-500 font-medium">
          No tasks found.
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Try adding a new task or changing your search.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;