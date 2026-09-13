function TaskFilters({ filter, onFilterChange }) {
  const filters = [
    "all",
    "active",
    "completed"
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">

      {filters.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onFilterChange(item)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === item
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}

    </div>
  );
}

export default TaskFilters;