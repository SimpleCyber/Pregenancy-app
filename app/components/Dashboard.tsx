"use client";

import { useState } from "react";
import { User } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "./BottomNav";

interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  // Static state for now to match design
  const [toggle, setToggle] = useState<"Week" | "Days">("Week");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    milk: false,
    banana: false,
  });

  const handleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      {/* Mobile Container Application Shell */}
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl flex flex-col">
        {/* Header Section */}
        <div className="px-6 pt-12 pb-6">
          <div className="flex justify-between items-start mb-8">
            <span className="text-gray-500 text-sm font-medium">
              {dateString}
            </span>
            <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-gray-500 text-sm mb-1">You are Pregnant for</p>
              <h1 className="text-4xl font-bold text-gray-900">24 Weeks</h1>
            </div>
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button
                onClick={() => setToggle("Week")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${toggle === "Week" ? "bg-black text-white shadow-md" : "text-gray-500"}`}
              >
                Week
              </button>
              <button
                onClick={() => setToggle("Days")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${toggle === "Days" ? "bg-black text-white shadow-md" : "text-gray-500"}`}
              >
                Days
              </button>
            </div>
          </div>

          {/* Trimester Card */}
          <div
            className="bg-[#E8F5E9] p-6 rounded-3xl relative overflow-hidden"
            style={{ backgroundColor: "#fff0f5" }}
          >
            {" "}
            {/* Overriding green with pink theme */}
            {/* We can use a custom SVG graph or simple bars */}
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  2nd Trimester
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  24 weeks and 4 days
                </p>
              </div>
              <span className="font-semibold underline">4x</span>
            </div>
            <div className="flex items-end justify-between h-24 gap-3">
              <div className="text-gray-800 font-medium text-sm mb-2">
                Health 👍
              </div>
              {/* Visual Fake Graph Bars */}
              <div className="flex items-end gap-2 h-full pb-1">
                {[20, 30, 40, 50, 60, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div
                      className={`w-6 rounded-t-md transition-all ${i === 6 ? "bg-gray-900" : "bg-[#d8a8b8]"}`}
                      style={{ height: `${h}%` }}
                    ></div>
                    <span className="text-[10px] text-gray-400">W{i * 4}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Healthy Food Section */}
        <div className="px-6 pb-24">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Healthy food</h3>
          <div className="space-y-4">
            {/* Item 1 - Enhanced Colors */}
            <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  🥛
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    2 Glass of Pure Milk
                  </h4>
                  <p className="text-gray-500 text-xs">
                    Healthy drink for your health
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleCheck("milk")}
                className={`w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${checkedItems["milk"] ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-gray-50"}`}
              >
                {checkedItems["milk"] && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Item 2 - Enhanced Colors */}
            <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-yellow-200 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  🍌
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    6 Banana Daily
                  </h4>
                  <p className="text-gray-500 text-xs">
                    Healthy food for your health
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleCheck("banana")}
                className={`w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${checkedItems["banana"] ? "border-yellow-500 bg-yellow-500" : "border-gray-300 bg-gray-50"}`}
              >
                {checkedItems["banana"] && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
