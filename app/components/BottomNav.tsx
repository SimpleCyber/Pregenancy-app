"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function BottomNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 py-4 px-8 flex justify-between items-center pb-8 z-20">
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 transition-colors ${isActive("/") ? "text-black" : "text-gray-400 hover:text-gray-900"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isActive("/") ? "currentColor" : "none"}
          strokeWidth={isActive("/") ? 0 : 1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isActive("/") ? (
            <>
              <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69Z" />
              <path d="M12 5.432 2.15 15.28a.75.75 0 1 0 1.06 1.062L12 7.556l8.79 8.784a.75.75 0 1 0 1.06-1.06L12 5.432Z" />
              <path d="M6 10.5V20.25a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75v-6.75a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.22-.53l-8.25-8.25a.75.75 0 0 0-1.06 0l-8.25 8.25A.75.75 0 0 0 6 10.5Z" />
            </>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          )}
        </svg>
      </Link>

      <Link
        href="/analytics"
        className={`flex flex-col items-center gap-1 transition-colors ${isActive("/analytics") ? "text-black" : "text-gray-400 hover:text-gray-900"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isActive("/analytics") ? "currentColor" : "none"}
          strokeWidth={isActive("/analytics") ? 0 : 1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      </Link>

      <Link
        href="/notifications"
        className={`flex flex-col items-center gap-1 transition-colors ${isActive("/notifications") ? "text-black" : "text-gray-400 hover:text-gray-900"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isActive("/notifications") ? "currentColor" : "none"}
          strokeWidth={isActive("/notifications") ? 0 : 1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </Link>

      <Link
        href="/profile"
        className={`flex flex-col items-center gap-1 transition-colors ${isActive("/profile") ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
      >
        {user?.photoURL ? (
          <Image
            src={user.photoURL}
            alt="User"
            width={24}
            height={24}
            className={`rounded-full border-2 ${isActive("/profile") ? "border-black" : "border-transparent"}`}
          />
        ) : (
          <div
            className={`w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 border-2 ${isActive("/profile") ? "border-black" : "border-transparent"}`}
          >
            {user?.displayName?.charAt(0) || "U"}
          </div>
        )}
      </Link>
    </div>
  );
}
