import type React from "react"

interface ShrimpStatsProps {
  stats: Record<string, number>
}

const ShrimpStats: React.FC<ShrimpStatsProps> = ({ stats }) => {
  const colors = {
    Small: {
      bg: "bg-green-100",
      border: "border-green-200",
      text: "text-green-800",
      barBg: "bg-green-500",
      barBgLight: "bg-green-200",
    },
    Medium: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      text: "text-yellow-800",
      barBg: "bg-yellow-500",
      barBgLight: "bg-yellow-200",
    },
    Large: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      text: "text-blue-800",
      barBg: "bg-blue-500",
      barBgLight: "bg-blue-200",
    },
    "Non-Marketable": {
      bg: "bg-red-100",
      border: "border-red-200",
      text: "text-red-800",
      barBg: "bg-red-500",
      barBgLight: "bg-red-200",
    },
  }

  // Calculate max value for bar chart scaling
  const maxValue = Math.max(...Object.values(stats))

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-6">
        <span className="inline-block">📊</span> Shrimp Sorting Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Object.entries(stats).map(([category, count]) => {
          const style = colors[category as keyof typeof colors] || {
            bg: "bg-gray-100",
            border: "border-gray-200",
            text: "text-gray-800",
            barBg: "bg-gray-500",
            barBgLight: "bg-gray-200",
          }

          return (
            <div key={category} className={`rounded-lg p-4 text-center border ${style.border} ${style.bg}`}>
              <h3 className={`text-sm font-medium mb-1 ${style.text}`}>{category}</h3>
              <p className={`text-2xl font-bold ${style.text}`}>{count.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Total Count</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Distribution</h3>
        <div className="space-y-4">
          {Object.entries(stats).map(([category, count]) => {
            const style = colors[category as keyof typeof colors] || {
              bg: "bg-gray-100",
              border: "border-gray-200",
              text: "text-gray-800",
              barBg: "bg-gray-500",
              barBgLight: "bg-gray-200",
            }

            const percentage = Math.round((count / maxValue) * 100)

            return (
              <div key={category} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className={`font-medium ${style.text}`}>{category}</span>
                  <span className="text-gray-500">{count.toLocaleString()}</span>
                </div>
                <div className={`w-full h-2 ${style.barBgLight} rounded-full overflow-hidden`}>
                  <div className={`h-full ${style.barBg} rounded-full`} style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShrimpStats

