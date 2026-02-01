"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const ShareIcon = ({ className }: { className?: string }) => (
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
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function AnalyticsPage() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(168);

  const days = [165, 166, 167, 168, 169, 170];

  const videos = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2670&auto=format&fit=crop", // Pregnant belly in nature
      videoUrl: "https://www.youtube.com/watch?v=yJgL55YvVzM", // Placeholder link
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1588661706686-22445c382218?q=80&w=2574&auto=format&fit=crop", // Pregnant woman holding flowers or bump
      videoUrl: "https://www.youtube.com/watch?v=K4Lz8k1q6wE", // Placeholder link
    },
  ];

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen font-sans">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 pt-8">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-black">Status</h1>
          <button className="p-2 -mr-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
            <ShareIcon className="w-6 h-6" />
          </button>
        </header>

        {/* Date Scroll */}
        <div className="w-full">
          <div className="flex justify-between items-center px-6 py-4 overflow-x-auto no-scrollbar gap-4">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center justify-center min-w-[40px] h-10 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDay === day
                    ? "bg-black text-white shadow-lg scale-110"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Status Card */}
        <div className="px-6 py-2">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50 flex items-center justify-between gap-6">
            {/* Baby Visualization Circle */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                {/* Simple SVG Placeholder for Fetus */}
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80">
                  <path
                    d="M50 20 Q70 20 80 40 T70 80 Q50 90 30 70 T30 30 Q40 20 50 20"
                    fill="none"
                    stroke="#db7093"
                    strokeWidth="2"
                  />
                  <circle cx="45" cy="35" r="10" fill="#ffb6c1" />
                  <path
                    d="M45 45 Q55 65 35 65"
                    fill="none"
                    stroke="#db7093"
                    strokeWidth="2"
                  />
                </svg>
                {/* If we had a real image asset, we'd use Image component here */}
                {/* <Image src="/baby-placeholder.png" alt="Baby" fill className="object-cover" /> */}
              </div>
            </div>

            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-2 text-center">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Length</span>
                <span className="text-2xl font-bold text-black leading-none">
                  5.13{" "}
                  <span className="text-xs font-medium text-gray-500">oz</span>
                </span>
                {/* Matches screenshot "5.13 oz" even if physics is weird */}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Weight</span>
                <span className="text-2xl font-bold text-black leading-none">
                  4.197
                </span>
              </div>
              <div className="flex flex-col items-center col-span-2 pt-2">
                <span className="text-gray-400 text-xs mb-1">Days Left</span>
                <span className="text-lg font-bold text-black">112</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tips */}
        <div className="px-6 mt-6 pb-28">
          <h2 className="text-lg font-bold text-black mb-4">Video tips</h2>
          <div className="flex flex-col gap-4">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-48 rounded-[2rem] overflow-hidden group shadow-md"
              >
                <Image
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-5 h-5 text-black ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
