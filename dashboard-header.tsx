"use client"

import { useState } from "react"

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg py-3 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Left: Logo and title */}
        <div className="flex items-center gap-4">
          <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <span className="text-2xl">🦐</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold tracking-tight">Shrimp Sorting Dashboard</h1>
            <p className="text-sm text-blue-100">Real-time monitoring and management system</p>
          </div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-white hover:bg-blue-600 p-1 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex items-center w-full max-w-md bg-white/90 rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search bins or logs..."
            className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Right: Status, Notifications, User Menu */}
        <div className="flex items-center gap-4">
          {/* Status */}
          <div className="hidden sm:flex bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Active
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </div>

          {/* User Profile */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
              <div className="w-9 h-9 bg-white text-blue-600 font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                A
              </div>
              <div className="hidden md:flex items-center gap-1">
                <div className="text-sm font-medium">Admin</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {/* Dropdown Menu for User */}
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 z-10 hidden group-hover:block transition-all duration-200 transform origin-top-right">
              <ul className="py-1">
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Profile
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </li>
                <li className="border-t border-gray-100"></li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-3 bg-blue-800 rounded-lg p-4 shadow-lg">
          <div className="flex items-center w-full bg-white/90 rounded-lg shadow-md overflow-hidden mb-3">
            <input
              type="text"
              placeholder="Search bins or logs..."
              className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Shrimp Sorting Dashboard</div>
            <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Active
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default DashboardHeader

