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
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center md:px-12 md:py-32 lg:flex-row lg:text-left">
        <div className="max-w-2xl mb-10 lg:mb-0 lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl mb-6">
            Embrace the Journey of Motherhood
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Your companion through every step of pregnancy. Track your growth,
            connect with other moms, and find peace in the process.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
            <Link
              href="/signup"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
            >
              Join Our Community
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-primary transition-colors"
            >
              Log in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative w-full max-w-lg lg:w-1/2">
          <Image
            src="/pregnancy_hero.png"
            alt="Mother and child illustration"
            width={800}
            height={600}
            className="w-full h-auto drop-shadow-xl rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Simple tools designed to make your pregnancy journey smoother and
              more memorable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                {
                  name: "Weekly Tracking",
                  description:
                    "Track your baby’s growth week by week with beautiful visualizations and health insights.",
                  icon: "📅",
                },
                {
                  name: "Health & Wellness",
                  description:
                    "Expert-backed tips on nutrition, exercise, and mental well-being for you and your baby.",
                  icon: "🧘‍♀️",
                },
                {
                  name: "Community Support",
                  description:
                    "Connect with other expecting mothers, share stories, and get advice in a safe space.",
                  icon: "❤️",
                },
              ].map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-16 p-6 rounded-2xl bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12 mt-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Pregnancy App. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
