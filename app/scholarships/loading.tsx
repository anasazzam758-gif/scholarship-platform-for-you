export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-1/3 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="h-72 bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            </div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}