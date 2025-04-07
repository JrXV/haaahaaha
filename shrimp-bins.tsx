import type React from "react"

interface ShrimpBin {
  name: string
  count: number
  trend?: "up" | "down" | "neutral"
  percentage?: number
}

interface ShrimpBinsProps {
  bins: ShrimpBin[]
}

const ShrimpBins: React.FC<ShrimpBinsProps> = ({ bins }) => {
  const binColors = {
    Small: {
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-green-200",
      text: "text-green-800",
      icon: "text-green-600",
    },
    Medium: {
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: "text-yellow-600",
    },
    Large: {
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: "text-blue-600",
    },
    "Non-Marketable": {
      bg: "bg-gradient-to-br from-red-50 to-red-100",
      border: "border-red-200",
      text: "text-red-800",
      icon: "text-red-600",
    },
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 justify-center md:justify-start">
        <span className="inline-block">🧺</span> Shrimp Bin Containers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bins.map((bin, index) => {
          const style = binColors[bin.name as keyof typeof binColors] || {
            bg: "bg-gradient-to-br from-gray-50 to-gray-100",
            border: "border-gray-200",
            text: "text-gray-800",
            icon: "text-gray-600",
          }

          return (
            <div
              key={index}
              className={`rounded-xl p-5 shadow-md border ${style.border} ${style.bg} text-center transition duration-200 hover:shadow-lg hover:translate-y-[-2px]`}
            >
              <h3 className={`text-lg font-semibold mb-2 ${style.text}`}>{bin.name}</h3>
              <div className="flex justify-between items-end">
                <div className="w-full">
                  <p className={`text-3xl font-bold ${style.text}`}>{bin.count.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-1">Total Shrimp</p>
                </div>
                {bin.trend && (
                  <div className="flex items-center gap-1">
                    {bin.trend === "up" && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span className="text-xs font-medium text-green-600">{bin.percentage}%</span>
                      </>
                    )}
                    {bin.trend === "down" && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                          />
                        </svg>
                        <span className="text-xs font-medium text-red-600">{bin.percentage}%</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShrimpBins

