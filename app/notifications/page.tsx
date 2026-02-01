"use client";

import { useRouter } from "next/navigation";
import BottomNav from "../components/BottomNav";

// Icons
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const BellIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function NotificationsPage() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      title: "Task Reminder",
      message: "You have to complete this today",
      icon: <BellIcon className="w-5 h-5 text-purple-500" />,
      time: "2 hours ago",
      bgColor: "bg-purple-50",
    },
    {
      id: 2,
      title: "Another Task",
      message: "You have to complete that today",
      icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
      time: "4 hours ago",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "Year to date",
      message: "Check your progress summary for the year.",
      icon: <TrendingUpIcon className="w-5 h-5 text-blue-500" />,
      time: "Yesterday",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "Tasks for today",
      message: "You have 5 pending tasks remaining.",
      icon: <CalendarIcon className="w-5 h-5 text-orange-500" />,
      time: "Today, 9:00 AM",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen font-sans">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 pt-8 bg-white sticky top-0 z-10">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-black">Notifications</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </header>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto px-6 pb-28">
          <div className="flex flex-col gap-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div
                  className={`p-3 rounded-full ${notification.bgColor} flex-shrink-0`}
                >
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {notification.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
