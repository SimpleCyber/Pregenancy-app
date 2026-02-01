"use client";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import BottomNav from "../components/BottomNav";

declare global {
  interface Window {
    CRISP_WEBSITE_ID: string;
    CRISP_OWNER_ID: string;
    HELPDECK_USER: {
      name: string;
      email: string;
      userId: string;
    };
  }
}

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      window.CRISP_WEBSITE_ID = "ws_1769943066884_onv88ycym";
      window.CRISP_OWNER_ID = "c77uN9hZnAd7NUCxmcspVJxPapm1";
      window.HELPDECK_USER = {
        name: user.displayName || "User",
        email: user.email || "",
        userId: user.uid,
      };

      const script = document.createElement("script");
      script.src = "https://help-deck-gamma.vercel.app/widget-loader.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Cleanup script when unmounting to avoid duplicates if re-mounting
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading)
    return <div className="p-8 text-center text-primary">Loading...</div>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="text-gray-500 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">Profile</h1>
          <div className="w-6"></div> {/* Spacer */}
        </div>

        <div className="flex-1 flex flex-col items-center p-8 space-y-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#fff0f5] shadow-lg">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl text-gray-400">
                {user.displayName?.charAt(0) || "U"}
              </div>
            )}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {user.displayName || "User"}
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <div className="w-full space-y-4 ">
            <button className="w-full p-4 rounded-xl bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-pink-100 text-pink-500 rounded-lg">
                  ⚙️
                </span>
                <span className="font-medium">Settings</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full p-4 rounded-xl bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-pink-100 text-pink-500 rounded-lg">
                  ❓
                </span>
                <span className="font-medium">Help & Support</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="mt-auto w-full py-3 rounded-full bg-black text-white font-bold shadow-lg hover:bg-gray-800 transition-transform active:scale-95"
          >
            Log Out
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
