"use client"

import type React from "react"
import { useState, useEffect } from "react"

const ShrimpMonitoring: React.FC = () => {
  const [shrimpData, setShrimpData] = useState<{
    category: string
    weight: string
    timestamp: string
  } | null>(null)

  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const updateData = () => {
      setShrimpData({
        category: ["Small", "Medium", "Large", "Non-Marketable"][Math.floor(Math.random() * 4)],
        weight: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toLocaleTimeString(),
      })
      setProgress(100)
    }

    // Initial data
    updateData()

    const interval = setInterval(() => {
      updateData()
    }, 5000)

    // Progress bar countdown
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - 1))
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const categoryStyles = {
    Small: "bg-green-100 text-green-800 border-green-200",
    Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Large: "bg-blue-100 text-blue-800 border-blue-200",
    "Non-Marketable": "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-6">
        <span className="inline-block">🦐</span> Real-Time Shrimp Monitoring
      </h2>
      {shrimpData ? (
        <div className="flex flex-col items-center gap-4">
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              categoryStyles[shrimpData.category as keyof typeof categoryStyles] ||
              "bg-gray-100 text-gray-800 border-gray-200"
            }`}
          >
            {shrimpData.category}
          </div>

          <div className="grid grid-cols-2 w-full gap-4">
            <div className="flex items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <div className="text-sm">
                <span className="text-gray-500">Weight:</span>
                <span className="ml-1 font-semibold text-gray-800">{shrimpData.weight}g</span>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm">
                <span className="text-gray-500">Time:</span>
                <span className="ml-1 font-semibold text-gray-800">{shrimpData.timestamp}</span>
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Next sample in</span>
              <span>{Math.ceil(progress / 20)} seconds</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center py-8">
          <div className="flex space-x-2 mb-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
          <p className="text-sm text-gray-500">Waiting for data...</p>
        </div>
      )}
    </div>
  )
}

export default ShrimpMonitoring

