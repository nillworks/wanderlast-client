function StatisticsSection({ stats }) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Travel Statistics
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {stats.map(stat => (
          <div
            key={stat.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>

                <h3 className="mt-2 text-2xl font-bold text-gray-800">
                  {stat.value}
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${stat.bg} ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsSection;
