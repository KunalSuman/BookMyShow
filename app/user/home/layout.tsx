"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Get the user_id from the URL query parameters (if present)
  const userId = searchParams.get("user_id") || "";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white text-black p-4 shadow-md">
        <div className="text-2xl font-bold">BookMyShow</div>
        <div>profile</div>
      </div>
      <hr className="border-t border-gray-300" />

      <div className="flex bg-white text-black">
        {/* Sidebar */}
        <div className="w-64 p-6">
          <div className="space-y-4">
            <div
              className="p-2 cursor-pointer rounded hover:bg-gray-100"
              onClick={() =>
                router.push(`/user/home?user_id=${encodeURIComponent(userId)}`)
              }
            >
              Home
            </div>
            <div
              className="p-2 cursor-pointer rounded hover:bg-gray-100"
              onClick={() =>
                router.push(`/user/home/history?user_id=${encodeURIComponent(userId)}`)
              }
            >
              History
            </div>
            <div
              className="p-2 cursor-pointer rounded hover:bg-gray-100"
              onClick={() =>
                router.push(`/user/home/payment?user_id=${encodeURIComponent(userId)}`)
              }
            >
              Payment
            </div>
            <div
              className="p-2 cursor-pointer rounded hover:bg-gray-100"
              onClick={() =>
                router.push(`/user/home/paymentHistory?customer_id=${encodeURIComponent(userId)}`)
              }
            >
              Payment History
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full"></div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
