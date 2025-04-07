import type React from "react"
import DashboardHeader from "./dashboard-header"
import ShrimpBins from "./shrimp-bins"
import ShrimpMonitoring from "./shrimp-monitoring"
import ShrimpStats from "./shrimp-stats"

const Dashboard: React.FC = () => {
  // Sample data
  const binData = [
    { name: "Small", count: 1245, trend: "up" as const, percentage: 12 },
    { name: "Medium", count: 2890, trend: "up" as const, percentage: 8 },
    { name: "Large", count: 1560, trend: "down" as const, percentage: 3 },
    { name: "Non-Marketable", count: 420, trend: "down" as const, percentage: 5 },
  ]

  const statsData = {
    Small: 1245,
    Medium: 2890,
    Large: 1560,
    "Non-Marketable": 420,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto py-6">
        <ShrimpBins bins={binData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-6 mt-6">
          <ShrimpMonitoring />
          <ShrimpStats stats={statsData} />
        </div>

        <div className="mt-6 px-4 md:px-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-6">
              <span>📝</span> Recent Activity
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Weight
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...Array(5)].map((_, i) => {
                    const categories = ["Small", "Medium", "Large", "Non-Marketable"]
                    const category = categories[Math.floor(Math.random() * categories.length)]
                    const weight = (Math.random() * 100).toFixed(2)
                    const time = new Date(Date.now() - i * 1000 * 60 * 5).toLocaleTimeString()

                    let statusColor = ""
                    if (category === "Small") statusColor = "bg-green-100 text-green-800"
                    else if (category === "Medium") statusColor = "bg-yellow-100 text-yellow-800"
                    else if (category === "Large") statusColor = "bg-blue-100 text-blue-800"
                    else statusColor = "bg-red-100 text-red-800"

                    return (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{time}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{category}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}
                          >
                            Processed
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2023 Shrimp Sorting Dashboard | All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Dashboard

