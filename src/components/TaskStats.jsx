function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="mb-8">

      <div className="grid grid-cols-3 gap-3 mb-5">

        <div className="p-4 bg-gray-50 rounded-xl border text-center">
          <p className="text-2xl font-bold text-gray-900">
            {totalTasks}
          </p>

          <p className="text-sm text-gray-500">
            Total
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {remainingTasks}
          </p>

          <p className="text-sm text-gray-500">
            Remaining
          </p>
        </div>

        <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
          <p className="text-2xl font-bold text-green-600">
            {completedTasks}
          </p>

          <p className="text-sm text-gray-500">
            Completed
          </p>
        </div>

      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">
            Progress
          </span>

          <span className="font-semibold text-gray-800">
            {progress}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  );
}

export default TaskStats;