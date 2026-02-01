"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Dashboard from "./components/Dashboard"; // Import new component

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.refresh();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fff0f5]">
        <div className="text-primary text-xl font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (user) {
    return <Dashboard user={user} />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-white to-pink-50 font-sans text-foreground px-6 py-8">
      {/* Mobile-First Hero Section */}
      <div className="w-full max-w-md flex flex-col items-center text-center space-y-8">
        {/* App Icon */}
        <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/icon-512.png"
            alt="Pregnancy App"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-xs">
          <Image
            src="/pregnancy_hero.png"
            alt="Mother and child illustration"
            width={400}
            height={300}
            className="w-full h-auto drop-shadow-2xl rounded-3xl"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary leading-tight">
            Your Journey,
            <br />
            Our Support
          </h1>
          <p className="text-base leading-relaxed text-gray-600 max-w-sm mx-auto">
            Track your pregnancy week by week. Connect with other moms. Find
            peace in every moment.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs pt-4">
          <Link
            href="/signup"
            className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all active:scale-95"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            Log In
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-400 pt-8">
          © {new Date().getFullYear()} Pregnancy App
        </p>
      </div>
    </div>
  );
}
