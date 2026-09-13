function HeaderTemp() {
  return (
    <header className="mb-8 text-center">

     <div className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-200 rounded-full mb-4 shadow-sm">
       <span className="text-xl font-semibold italic tracking-wide text-blue-700">
          Divine Grace
      </span>
     </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
        Task Tracker
      </h1>

      <p className="mt-3 text-gray-600">
        Organize your tasks and stay productive.
      </p>

    </header>
  );
}

export default HeaderTemp;