"use client";
import React from "react";
import {useRouter } from "next/navigation"
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    return (
    <div className="min-h-screen bg-gray-100">
      {/* divbar */}
        <div className="flex justify-between items-center bg-white text-black p-4 shadow-md">
            <div className="text-2xl font-bold">BookMyShow</div>
            <div>
            profile
            </div>
        </div>
        <hr className="border-t border-gray-300" />
      <div className="flex text-black bg-white">
        <div className=" p-6">
          <div className="space-y-4">
            <div className="p-2 cursor-pointer rounded" onClick={()=>{
                router.push('/company/home');
            }}>
              Home
            </div>
            <div className="p-2 cursor-pointer rounded" onClick={() => router.push('/company/home/history')}>
              Payment History
            </div>
            <div className="p-2 cursor-pointer rounded" onClick={() => router.push('/company/home/evr')}>
              Event History
            </div>
            <div className="p-2 cursor-pointer rounded" onClick={()=>router.push('/user/home/payment')}>
              Payment
            </div>
          </div>
        </div>
        <div className="w-px bg-gray-300 "></div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
